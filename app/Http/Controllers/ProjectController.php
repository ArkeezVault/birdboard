<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Auth\GuardHelpers;

use JWTAuth;

use App\Http\Resources\ProjectResource;
use App\Http\Resources\ProjectCollection;
use Illuminate\Support\Facades\Validator;



class ProjectController extends Controller
{
    use GuardHelpers;
    // protected $user;
 
    // public function __construct()
    // {
    //     $this->user = JWTAuth::parseToken()->authenticate();
    // }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //$projects = auth()->user()->projects;
        $projects = auth()->user()->accessableProject();
        return (new ProjectCollection($projects->load('owner')));

        //return response()->json($projects);
        //return new ProjectCollection($projects);
        //return view('projects.index',compact('projects'));
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $validated = $request->validate([
        //     'title' => 'sometimes|required',
        //     'description' => 'sometimes|required|max:100',
        // ]);
        $validated = Validator::make($request->all(), [
            'title' => 'sometimes|required|max:25',
            'description' => 'sometimes|required|max:100',
        ]);

        if ($validated->fails()) 
        {
            return response()->json(['errors' => $validated->errors()], 422);
        }
        
        else
        {
            //$project = auth()->user()->projects()->create($validated); 
            $project = auth()->user()->projects()->create([
                'title' => $request->get('title'),
                'description' => $request->get('description'),
            ]); 


            return response()->json([
            'message' => 'project successfully added',
            'data' => new ProjectResource($project)
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $this->authorize('update',$project);

        //return response()->json($project);
        return (new ProjectResource($project->load('owner')));
        return new ProjectResource($project->load('owner'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $this->authorize('update',$project);

        // $validated = $request->validate([
        //     'title' => 'sometimes|required',
        //     'description' => 'sometimes|required|max:100',
        // ]);

        $validated = Validator::make($request->all(), [
            'title' => 'sometimes|required|max:25',
            'description' => 'sometimes|required|max:100',
        ]);

        if ($validated->fails()) 
        {
            return response()->json(['errors' => $validated->errors()], 422);
        }
        else
        {
            $project->update([
                'title' => $request->get('title'),
                'description' => $request->get('description'),
            ]);

            return response()->json([
                'message' => 'project successfully updated',
                'data' => $project
            ], 201);
        }
       
        
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        $this->authorize('delete',$project);

        $project->delete();

        return response()->json([
            'message' => 'project successfully deleted'
        ], 201);
    }
}
