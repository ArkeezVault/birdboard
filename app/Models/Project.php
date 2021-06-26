<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    public function owner()
    {
        return $this->belongsTo(User::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function notes()
    {
        return $this->hasMany(Note::class);
    }
    
    public function activity()
    {
        return $this->hasMany(Activity::class);
    }
    
    public function members()
    {
        return $this->belongsToMany(User::class,'project_members');
    }

}
