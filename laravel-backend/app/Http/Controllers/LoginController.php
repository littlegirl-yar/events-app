<?php

namespace App\Http\Controllers;

use App\Http\Requests\TokenFormRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function token(TokenFormRequest $request): JsonResponse
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request->get('email'))->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type'   => 'Bearer'
        ]);
    }

    public function logout(Request $request) : JsonResponse
    {
        Auth::guard('web')->logout();

        $request->user()->currentAccessToken()->delete();

        return response()->json('Logged out',200);
    }
}
