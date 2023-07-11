<?php

namespace App\Http\Controllers;

use App\Models\productSizes;
use App\Http\Requests\StoreproductSizesRequest;
use App\Http\Requests\UpdateproductSizesRequest;

class ProductSizesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreproductSizesRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreproductSizesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\productSizes  $productSizes
     * @return \Illuminate\Http\Response
     */
    public function show(productSizes $productSizes)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\productSizes  $productSizes
     * @return \Illuminate\Http\Response
     */
    public function edit(productSizes $productSizes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateproductSizesRequest  $request
     * @param  \App\Models\productSizes  $productSizes
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateproductSizesRequest $request, productSizes $productSizes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\productSizes  $productSizes
     * @return \Illuminate\Http\Response
     */
    public function destroy(productSizes $productSizes)
    {
        //
    }
}
