<?php

namespace App\Http\Controllers;

use App\Models\orderDetails;
use App\Http\Resources\OrderDetailsResources;
use App\Http\Resources\OrdersResources;
use App\Models\Orders;
use Illuminate\Http\Request;

class OrdersController extends Controller
{
    public function placeOrders(Request $request)
{
    // Validate the incoming request data as needed
    $request->validate([
        'orders' => 'required|array',
    ]);

    // Extract the data from the request
    $ordersData = $request->input('orders');

    // Loop through each order and save it to the database
    foreach ($ordersData as $orderData) {
        $order = new Orders();
        $order->user_id = $orderData['user_id'];
        $order->product_id = $orderData['product_id'];
        $order->order_quantity = $orderData['order_quantity'];
        $order->total_order_amount = $orderData['total_order_amount'];
        $order->save();
    }

    return response()->json(['message' => 'Orders placed successfully'], 200);
}
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
