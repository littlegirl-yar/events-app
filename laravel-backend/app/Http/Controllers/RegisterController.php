<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(RegisterFormRequest $request): JsonResponse
    {
        User::create([
            'first_name'     => $request->get('first_name'),
            'last_name'     => $request->get('last_name'),
            'email'    => $request->get('email'),
            'password' => Hash::make($request->get('password')),
            'birth_date' => $request->get('birth_date'),
            'registration_date' => now()
        ]);

        return response()->json('Registered successfully', 201);
    }
}
