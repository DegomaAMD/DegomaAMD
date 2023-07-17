<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\UserDetailsResources;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $userbe = User::all();
        $response = [
            'code' => 200, 
            'message' => 'success', 
            'userbe'=>UserDetailsResources::collection($userbe)];

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreUserRequest  $request
     * @return \Illuminate\Http\Response
     */
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show($id)
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

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $User)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateUserRequest  $request
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\orderDetails  $orderDetails
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
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
}

