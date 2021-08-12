<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];
    public $old = []; 


    public function path()
    {
        return "/projects/{$this->id}";
    }
    
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class)->latest();
    }

    public function addTask($body)
    {
        $task = $this->tasks()->create(['body' => $body,'user_id' => auth()->id()]);
        
        return $task;
    }
    public function notes()
    {
        return $this->hasMany(Note::class);
    }
    public function addNote($body)
    {
        $note = $this->notes()->create(['body' => $body,'user_id' => auth()->id()]);
        
        return $note;
    }
    
    public function activity()
    {
        return $this->hasMany(Activity::class)->latest();
    }
    
    public function members()
    {
        return $this->belongsToMany(User::class,'project_members')->withTimestamps();
    }
    public function invite(User $user)
    {
        if (! $this->members()->where(['user_id' => $user->id,'project_id' => $this->id])->exists()) 
        {
            if ($this->owner_id == $user->id)
            {
                //return redirect($this->path())->with('msg', 'You are the owner already!');
                return response()->json(['msg' => 'You are the owner already!'],203);
            }
            return $this->members()->attach($user);
        }
        else
        {
            //return redirect($this->path())->with('msg', 'user already invited!');
            return response()->json(['msg' => 'user already invited!'],203);
        }
    }

}
