<?php

namespace App\Http\Controllers;

use App\Models\orderDetails;
use App\Http\Resources\OrderDetailsResources;
use Illuminate\Http\Request;

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
        $order = orderDetails::all();
        $response = ['code' => 200, 'message' => 'Successfully Retrieved!', 'order'=>OrderDetailsResources::collection($order)];

        return $response;
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
    public function store(Request $request)
    {
        //
        $input = $request->all();
        $order = orderDetails::create($input);
        $response = [
            'code' => 200,
            'message' => 'Order successfully created!',
            'order' => new OrderDetailsResources($order)
        ];
        return $response;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function show(string $id)
    {
        //
        $order = orderDetails::findOrFail($id);
        $response = [
            'code' => 200, 
            'message' => 'Service successfully created!', 
            'order' => new OrderDetailsResources($order)
        ];
        return $response;
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
    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $order = orderDetails::findOrFail($id);
        $order->update($input);
        $response = [
            'code' => 200, 
            'message' => 'Order successfully updated!', 
            'order' => new OrderDetailsResources($order)
        ];
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $id)
    {
        //
        $order = orderDetails::findOrFail($id);
        $order->delete();
        $response = [
            'code' => 200, 
            'message' => 'Service successfully deleted!', 
            'order' => new OrderDetailsResources($order)
        ];
        return $response;
    }
}
