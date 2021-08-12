<?php

namespace App\Http\Controllers;

use App\Models\project;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\ModelNotFoundException;


use Illuminate\Support\Facades\Validator;

class MemberController extends Controller
{
    
    public function getMember($id)
    {
        $project = project::findOrFail($id);
        $members = $project->members;

        return response()->json($members);
    }
    /**
     * Invite a new user to the project.
     *
     * @param  Project                  $project
     * @param  Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function invite(Request $request,Project $project)
    {
        $this->authorize('manage',$project);

        $validated = Validator::make($request->all(), [
            'email' => ['required','exists:users,email'],
            [
                'email.exists' => 'email owner should has account in birdboard first !',            
            ]

        ]);
        if ($validated->fails()) 
        {
          return response()->json([
              'data' => [
                  'original' => ['msg'=>'email owner should has account in birdboard first !']
                ]
              ]);
        }
              //'msg'=>'email owner should has account in birdboard first !'

        else
        {
            $user = User::Where('email',request('email'))->firstOrFail();
            $res = $project->invite($user);
            if ($res == null)
            {
                //$member = $project->members->first();
                $mem = DB::table('project_members')->latest()->first();
    
                $user = User::Where('id',$mem->user_id)->first();
    
            
                return response()->json([
                    //'data' => $member,
                    'data' => $user,
                    'msg' => 'user successfully invited'
                ], 201);
            }
            else 
            {
                return response()->json([
                    'data' => $res,
                ], 201);
            }
        }

       
        
    }
    public function deleteMember($projectID, $userID)
    {

        $project = project::findOrFail($projectID);
        $user = User::findOrFail($userID);

        $member = DB::table('project_members')->where([
            ['project_id', '=', $project->id],
            ['user_id', '=', $user->id]
            ])->get();

        DB::table('project_members')->where([
            ['project_id', '=', $project->id],
            ['user_id', '=', $user->id]
            ])->delete();
        
        return response()->json([
            'message' => 'member successfully deleted',
        ], 201);
    }

}
