<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProblemSolvingController extends Controller
{
    public function index()
    {
        $elements = json_decode(session()->get('order'), true);
        return inertia('ProblemSolving/ProblemSolvingIndex', compact('elements'));
    }

    public function store(Request $request)
    {
        $validator = validator($request->all(), [
            'file' => 'required|mimes:csv,txt',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        $fileName = explode('.', $request->file('file')->getClientOriginalName())[0];
        $currentOrder = $request->file('file')->storeAs('orders', $request->file('file')->getClientOriginalName());
        $csv = collect(array_map('str_getcsv', file(Storage::path($currentOrder))));
        $element = $csv->map(fn($element) => [
            'id' => $element[0],
            'area' => $element[1],
            'name' => $element[2],
            'qty' => $element[3],
            'brand' => $element[4],
            'order_name' => $fileName
        ]);
        session()->put('order', $element);
        return redirect()->route('problem.solving.index')->with(['success' => 'File Uploaded']);
    }

    public function reset() {
        session()->remove('order');
        return redirect()->route('problem.solving.index')->with('success', 'Order Reset');
    }
}
