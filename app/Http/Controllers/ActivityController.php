<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\project;
use Illuminate\Http\Request;
use Illuminate\Auth\GuardHelpers;

use JWTAuth;

class ActivityController extends Controller
{
    
    public function getActivity($id)
    {
        $project = project::findOrFail($id);
        $activites = $project->activity;

        return response()->json($activites);
    }

}
