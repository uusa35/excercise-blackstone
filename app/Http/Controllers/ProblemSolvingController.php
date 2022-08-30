<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class ProblemSolvingController extends Controller
{
    public function index()
    {
        $order = session()->get('order');
        return inertia('ProblemSolving/ProblemSolvingIndex', compact('order'));
    }

    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'file' => 'required|mimes:csv,txt',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        try {
            $fileName = explode('.', $request->file('file')->getClientOriginalName())[0];
            $currentOrder = $request->file('file')->storeAs('public/orders', $request->file('file')->getClientOriginalName());
            $csv = collect(array_map('str_getcsv', file(Storage::path($currentOrder))));
            $element = $csv->map(fn($element) => [
                'id' => $element[0],
                'area' => $element[1],
                'product_name' => $element[2],
                'qty' => $element[3],
                'brand' => $element[4],
                'order_name' => $fileName
            ]);
            $orderCount = $element->count();
            $groups = $element->groupBy('product_name');
            $newGroup = $groups->map(fn($element) =>  $element->sum('qty'))->sortDesc();
            $groups = $newGroup->merge($groups)->take(2);
            $firstGroup = $groups->first();
            $secondGroup = $groups->last();
            $firstContent = $firstGroup[0]['product_name'] . ',' . $firstGroup->sum('qty') / $orderCount . PHP_EOL .
                $secondGroup[0]['product_name'] . ',' . $secondGroup->sum('qty') / $orderCount . PHP_EOL;
            $secondContent = $firstGroup[0]['product_name'] . ',' . $firstGroup[0]['brand'] . PHP_EOL .
                $secondGroup[0]['product_name'] . ',' . $secondGroup[0]['brand'] . PHP_EOL;
            $firstFile = '0_' . $fileName . '.csv';
            $secondFile = '1_' . $fileName . '.csv';
            File::put(storage_path('app/public/orders/' . $firstFile), $firstContent);
            File::put(storage_path('app/public/orders/' . $secondFile), $secondContent);
            $order = ['element' => $element, 'firstContent' => $firstContent, 'secondContent' => $secondContent, 'firstFile' => $firstFile, 'secondFile' => $secondFile];
            session()->put('order', $order);
            return redirect()->route('problem.solving.index')->with(['success' => 'File Uploaded']);
        } catch (\Exception $e) {
            return redirect()->route('problem.solving.index')->with(['error' => 'File uploaded is inappropriate according to the template given.']);
        }
    }

    public function reset()
    {
        session()->remove('order');
        return redirect()->route('problem.solving.index')->with('success', 'Order Reset');
    }

    public function download($fileName)
    {
        return Storage::download('public/orders/' . $fileName);
    }
}
