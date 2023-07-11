<?php

namespace App\Http\Controllers;

use App\Models\orderDetails;
use App\Http\Requests\StoreorderDetailsRequest;
use App\Http\Requests\UpdateorderDetailsRequest;

class OrderDetailsController extends Controller
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
     * @param  \App\Http\Requests\StoreorderDetailsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreorderDetailsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function show(orderDetails $orderDetails)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function edit(orderDetails $orderDetails)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateorderDetailsRequest  $request
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateorderDetailsRequest $request, orderDetails $orderDetails)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(orderDetails $orderDetails)
    {
        //
    }
}
