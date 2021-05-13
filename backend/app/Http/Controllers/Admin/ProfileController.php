<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Http\Requests\Admin\UpdateProfileRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function update(UpdateProfileRequest $request){

        // Get current user
        $userId = Auth::id();
        $user = User::findOrFail($userId);

        if ($request->input('password')) {
            $user->fill([
                'name' => $request->name,
                'email' => $request->email,
                'password' => bcrypt($request->input('password'))
            ]);
        }else{
            $user->fill([
                'name' => $request->name,
                'email' => $request->email
            ]);
        }

        // Save to database
        $user->save();

        return redirect()->route('profile')->with('message', 'El perfil se ha guardado correctamente');
    }
}
