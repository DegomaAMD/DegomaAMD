<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vizmaker_cafes', function (Blueprint $table) {
            $table->id();
            $table->string('product_category');
            $table->string('product_name');
            $table->string('product_details');
            $table->string('product_size');
            $table->integer('product_price');
            $table->binary('product_image');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vizmaker_cafes');
    }
};
