<?php

namespace App\Http\Controllers;

use App\Models\orderDetails;
use App\Http\Resources\OrderDetailsResources;
use App\Http\Resources\OrdersResources;
use App\Models\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
   
    public function index()
    {
        //
        $order = Orders::all();
        $response = ['code' => 200, 'message' => 'Successfully Retrieved!', 'order'=>OrdersResources::collection($order)];

        return $response;
    }


    public function store(Request $request)
    {
        //
        $input = $request->all();
        $order = Orders::create($input);
        $response = [
            'code' => 200,
            'message' => 'Order successfully created!',
            'order' => new OrdersResources($order)
        ];
        return $response;
    }


    public function show(string $id)
    {
        //
        $order = Orders::findOrFail($id);
        $response = [
            'code' => 200, 
            'message' => 'Service successfully created!', 
            'order' => new OrdersResources($order)
        ];
        return $response;
    }


    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $order = Orders::findOrFail($id);
        $order->update($input);
        $response = [
            'code' => 200, 
            'message' => 'Order successfully updated!', 
            'order' => new OrdersResources($order)
        ];
        return $response;
    }

    public function destroy(string $id)
    {
        //
        $order = Orders::findOrFail($id);
        $order->delete();
        $response = [
            'code' => 200, 
            'message' => 'Service successfully deleted!', 
            'order' => new OrdersResources($order)
        ];
        return $response;
    }
}
