<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Auth\GuardHelpers;

use Illuminate\Support\Facades\Validator;


use JWTAuth;


class TaskController extends Controller
{
    use GuardHelpers;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $project = project::findOrFail($id);
        $tasks = $project->tasks;
        return response()->json($tasks);
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
    public function store(Request $request,Project $project)
    {
        // $validated = $request->validate([
        //     'body' => 'required',
        // ]);

        $validated = Validator::make($request->all(), [
            'body' => 'required|max:25',
        ]);

        if ($validated->fails()) 
        {
            return response()->json(['errors' => $validated->errors()], 422);
        }
        else
        {
            $task = $project->addTask($request->get('body'));
            return response()->json([
                'message' => 'task successfully added',
                'data' => $task
            ], 201);
        }
        
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project, Task $task)
    {
        // $validated = $request->validate([
        //     'body' => 'required',
        // ]);

        $validated = Validator::make($request->all(), [
            'body' => 'required|max:25',
        ]);

        if ($validated->fails()) 
        {
            return response()->json(['errors' => $validated->errors()], 422);
        }
        else
        {
            $task->update([
                'body' => $request->get('body'),
            ]);
    
            if(request('completed'))
             {
                $task->complete();
             }
            else
            {
                $task->incomplete();
            }
            return response()->json([
                'message' => 'task successfully updated',
                'data' => $task
            ], 201);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project, Task $task)
    {
        $task->delete();

        return response()->json([
            'message' => 'task successfully deleted'
        ], 201);
    }
}
