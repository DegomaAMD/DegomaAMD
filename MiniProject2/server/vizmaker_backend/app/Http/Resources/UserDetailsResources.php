<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserDetailsResources extends JsonResource
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
        'firstname'=>$this->firstname,
        'lastname'=>$this->lastname,
        'username'=>$this->username,
        'email'=>$this->email,
        'password'=>$this->password,
        'house_lot_number'=>$this->house_lot_number,
        'street_name'=>$this->street_name,
        'barangay_name'=>$this->barangay_name,
        'city_name'=>$this->city_name,
        'province_name'=>$this->province_name,
        'region_name'=>$this->region_name,
        'country_name'=>$this->country_name,
        'postal_code'=>$this->postal_code,
        'phone_number'=>$this->phone_number,
        ];
    }
}
