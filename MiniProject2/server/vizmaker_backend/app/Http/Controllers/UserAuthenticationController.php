<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserAuthenticationController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'username' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string',
            'house_lot_number' => 'required|string',
            'street_name' => 'required|string',
            'barangay_name' => 'required|string',
            'city_name' => 'required|string',
            'province_name' => 'required|string',
            'region_name' => 'required|string',
            'country_name' => 'required|string',
            'postal_code' => 'required|integer',
            'phone_number' => 'required|integer',
        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors()->all()], 422);
        }
        $password_hash = Hash::make($request->password);

        $user = User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'username' => $request->username,
            'email' => $request->email,
            'password' => $password_hash,
            'house_lot_number' => $request->house_lot_number,
            'street_name' => $request->street_name,
            'barangay_name' => $request->barangay_name,
            'city_name' => $request->city_name,
            'province_name' => $request->province_name,
            'region_name' => $request->region_name,
            'country_name' => $request->country_name,
            'postal_code' => $request->postal_code,
            'phone_number' => $request->phone_number,
        ]);

        $token = $user->createToken('LaravelTokenPassword')->accessToken;

        $response = ['token' => $token, 'message' => 'Account Successfully Created!', 'code' => 200];
    
        return $response;
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if($validator->fails()){
            $error = $validator->errors()->all();
            return response(['error' => $error[0]], 422);
        }
        $password_hash = Hash::make($request->password);

        $user = User::where('username', $request->username)->first();

        if($user){
            $check_password = Hash::check($request->password, $user->password);
            
            if($check_password){
                $token = $user->createToken('LaravelTokenPassword')->accessToken;
                $response = ['token' => $token, 'message' => 'Success', 'code' => 200];
                
                return $response;
            }else{
                return response(['error'=>'Password Invalid!'], 422);
            }
        }else{
            return response(['error'=>'Username does not exist!'], 422);
        }
        
    }
    public function logout(Request $request){
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'User successfully logged out!'];

        return $response;

    }
}
