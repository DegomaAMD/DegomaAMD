<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    public function getCartItems()
    {
        $user = Auth::user();
        $cartItems = $user->cartItems->with('product')->get();

        return response()->json($cartItems);
    }

    public function addToCart(Request $request)
    {
        $user = Auth::user();
        $productId = $request->input('product_id');
        $quantity = $request->input('quantity', 1);

        // Validate the request if needed

        // Check if the cart item already exists for the user and product
        $cartItem = $user->cartItems->where('product_id', $productId)->first();

        if ($cartItem) {
            // Update the quantity if the cart item already exists
            $cartItem->update(['quantity' => $cartItem->quantity + $quantity]);
        } else {
            // Create a new cart item if it doesn't exist
            $cartItem = new CartItem([
                'user_id' => $user->id,
                'product_id' => $productId,
                'quantity' => $quantity,
            ]);

            $cartItem->save();
        }

        // You can return the updated cart items if needed
        $cartItems = $user->cartItems->with('product')->get();

        return response()->json($cartItems);
    }
}

