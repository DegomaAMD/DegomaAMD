<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class orderDetails extends Model
{
    use HasFactory;
    protected $table = 'order_details';
    protected $fillable = [
        'product_id',
        'user_id',
        'order_quantity',
        'total_order_amount',
    ];

}
