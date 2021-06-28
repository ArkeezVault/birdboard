<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\User;


class InvitaionController extends Controller
{
    /**
     * Invite a new user to the project.
     *
     * @param  Project                  $project
     * @param  Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request,Project $project)
    {
        $this->authorize('manage',$project);

        $validated = $request->validate([
            'email' => ['required','exists:users,email'],
        ],[
            'email.exists' => 'email owner should has account in birdboard first !',            
        ]);
        $user = User::Where('email',request('email'))->first();
        $project->invite($user);

        return response()->json([
            'message' => 'user successfully invited'
        ], 201);
        return redirect($project->path());
    }
}
