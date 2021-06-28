<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $touches = ['project'];
    protected $casts = ['completed' => 'boolean'];
    public $old = []; 


    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    public function activity()
    {
        return $this->morphMany(Activity::class,'subject');
    }

    public function complete()
    {
         $this->update(['completed'=>true]);
       
         $this->activity()->create([
                'project_id' =>$this->project->id,
                'user_id' => $this->project->owner_id,
                'description' => 'task_completed'
            ]);
    }
    public function incomplete()
    {
         $this->update(['completed'=>false]);
       
         $this->activity()->create([
                'project_id' =>$this->project->id,
                'user_id' => $this->project->owner_id,
                'description' => 'task_incompleted'
            ]);
    }
}
