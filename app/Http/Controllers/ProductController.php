<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $elements = Product::orderBy('id', 'desc')->paginate(4);
        return inertia('Product/ProductIndex', compact('elements'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Product/ProductCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = validator(request()->all(), [
            'name' => 'required:min:3|max:200',
            'price' => 'required|numeric|min:0.5|max:999',
            'qty' => ['numeric', 'min:1', 'max:99', 'regex:/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/','nullable'],
            'brand' => 'required:min:3|max:200',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        Product::create($request->request->all());
        return redirect()->route('product.index')->with('success', 'Product Created Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        return inertia('Product/ProductEdit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validator = validator(request()->all(), [
            'name' => 'required:min:3|max:200',
            'price' => 'required|numeric|min:0.5|max:999',
            'qty' => ['numeric', 'min:1', 'max:99', 'regex:/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/','nullable'],
            'brand' => 'required:min:3|max:200',
        ]);
        if ($validator->fails()) {
            return redirect()->back()->with('error', $validator->errors()->first());
        }
        Product::whereId($id)->first()->update($request->request->all());
        return redirect()->route('product.index')->with('success', 'Product Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Product::whereId($id)->delete();
        return redirect()->back()->with('success', 'product deleted');
    }
}
