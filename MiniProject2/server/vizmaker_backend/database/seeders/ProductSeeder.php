<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::create(['product_name' => 'Product 1', 'product_details' => 'Details 1', 'product_price' => 9.99]);
        Product::create(['product_name' => 'Product 2','product_details' => 'Details 1', 'product_price' => 19.99]);
        Product::create(['product_name' => 'Product 3','product_details' => 'Details 1', 'product_price' => 29.99]);
    
    }
}
