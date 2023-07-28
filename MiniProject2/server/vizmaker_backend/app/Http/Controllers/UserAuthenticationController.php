<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserDetailsResources;


class UserAuthenticationController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'username' => 'required|string',
            'email' => 'required|string|email',
            'password' => 'required|string',
 
        ]);

        if($validator->fails()){
            return response(['error' => $validator->errors()->all()], 422);
        }
        $password_hash = Hash::make($request->password);

        $user = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $password_hash,
            'role' => $request->role,
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

    

    public function index()
    {
        //
        $userbe = User::all();
        $response = [
            'code' => 200, 
            'message' => 'success', 
            'userbe'=> UserDetailsResources::collection($userbe)];

        return $response;
    }

    public function store(Request $request)
    {
        //
        $input = $request->all();
        $userbe = User::create($input);
        $response = [
            'code' => 200,
            'message' => 'User Details successfully created!',
            'userbe' => new UserDetailsResources($userbe)
        ];
        return $response;
    }

    public function show(string $id)
    {
        //
        $userbe = User::findOrFail($id);
        $response = [
            'code' => 200, 
            'message' => 'User Details successfully created!', 
            'userbe' => new UserDetailsResources($userbe)
        ];
        return $response;
    }

    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $userbe = User::findOrFail($id);
        $userbe->update($input);
        $response = [
            'code' => 200, 
            'message' => 'User Details successfully updated!', 
            'userbe' => new UserDetailsResources($userbe)
        ];
        return $response;
    }

    public function destroy(string $id)
    {
        //
        $userbe = User::findOrFail($id);
        $userbe->delete();
        $response = [
            'code' => 200, 
            'message' => 'User Details successfully deleted!', 
            'order' => new UserDetailsResources($userbe)
        ];
        return $response;
    }

    public function getUserByToken(Request $request)
    {
        return $request->user();
    }

}
