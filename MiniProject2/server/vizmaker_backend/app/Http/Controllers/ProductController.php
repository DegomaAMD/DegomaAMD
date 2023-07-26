<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function index()
    {
        //
        $product = Product::all();
        $response = ['code' => 200, 'message' => 'Successfully Retrieved!', 'product' => ProductResource::collection($product)];

        return $response;
    }

    public function store(Request $request)
    {
        //
        $input = $request->all();
        $product = Product::create($input);
        $response = [
            'code' => 200,
            'message' => 'Product successfully created!',
            'order' => new ProductResource($product)
        ];
        return $response;
    }

    public function show(string $id)
    {
        //
        $product = Product::findOrFail($id);
        $response = [
            'code' => 200, 
            'message' => 'Product successfully created!', 
            'order' => new ProductResource($product)
        ];
        return $response;

    }

    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $product = Product::findOrFail($id);
        $product->update($input);
        $response = [
            'code' => 200, 
            'message' => 'Product successfully updated!', 
            'order' => new ProductResource($product)
        ];
        return $response;
    }

    public function destroy(string $id)
    {
        //
        $product = Product::findOrFail($id);
        $product->delete();
        $response = [
            'code' => 200, 
            'message' => 'Service successfully deleted!', 
            'order' => new ProductResource($product)
        ];
        return $response;
    }


}
