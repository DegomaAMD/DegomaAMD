<?php

namespace App\Http\Controllers;

use App\Models\AdminUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\AdminUserResource;

class AdminUserController extends Controller
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

        $user = AdminUser::create([
            'username' => $request->username,
            'email' => $request->email,
            'password' => $password_hash,
        ]);

        $token = $user->createToken('LaravelTokenPassword')->accessToken;

        $response = ['token' => $token, 'message' => 'Admin Account Successfully Created!', 'code' => 200];
    
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

        $user = AdminUser::where('username', $request->username)->first();

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
        $response = ['message' => 'Admin User successfully logged out!'];

        return $response;

    }

    public function index()
    {
        //
        $adminuserbe = AdminUser::all();
        $response = [
            'code' => 200, 
            'message' => 'success', 
            'adminuserbe'=> AdminUserResource::collection($adminuserbe)];

        return $response;
    }

    public function store(Request $request)
    {
        //
        $input = $request->all();
        $adminuserbe = AdminUser::create($input);
        $response = [
            'code' => 200,
            'message' => 'Admin User Details successfully created!',
            'adminuserbe' => new AdminUserResource($adminuserbe)
        ];
        return $response;
    }

    public function show(string $id)
    {
        //
        $adminuserbe = AdminUser::findOrFail($id);
        $response = [
            'code' => 200, 
            'message' => ' Admin User Details successfully created!', 
            'adminuserbe' => new AdminUserResource($adminuserbe)
        ];
        return $response;
    }

    public function update(Request $request, string $id)
    {
        //
        $input = $request->all();
        $adminuserbe = AdminUser::findOrFail($id);
        $adminuserbe->update($input);
        $response = [
            'code' => 200, 
            'message' => 'Admin User Details successfully updated!', 
            'adminuserbe' => new AdminUserResource($adminuserbe)
        ];
        return $response;
    }

    public function destroy(string $id)
    {
        //
        $adminuserbe = AdminUser::findOrFail($id);
        $adminuserbe->delete();
        $response = [
            'code' => 200, 
            'message' => 'Admin User Details successfully deleted!', 
            'order' => new AdminUserResource($adminuserbe)
        ];
        return $response;
    }

}
