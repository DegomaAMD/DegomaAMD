<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vizmakerCafe extends Model
{

    use HasFactory;
    protected $table = 'vizmaker_cafes';
    protected $fillable = [
        'product_category',
        'product_name',
        'product_details',
        'product_size',
        'product_price',
        'product_image'

    ];
}
