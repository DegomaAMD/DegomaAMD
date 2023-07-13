<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderDetailsResources extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'product_id'=>$this->product_id,
            'user_id' =>$this->user_id,
            'order_quantity' =>$this->order_quantity,
            'total_order_amount' =>$this->total_order_amount,
        ];
    }
}
