<?php

namespace App\Observers;

use App\Models\Note;
use App\Models\Activity;
use Illuminate\Support\Arr;


class NoteObserver
{
    /**
     * Handle the Note "created" event.
     *
     * @param  \App\Models\Note  $note
     * @return void
     */
    public function created(Note $note)
    {
        $activity = $note->activity()->create([
            'project_id' =>$note->project->id,
            'user_id' => $note->project->owner_id,
            'description' => 'note_created'
        ]);
        
    }
//##################################
public function updating(Note $note)
{
    $note->old = $note->getOriginal();
}
//##################################
    /**
     * Handle the Note "updated" event.
     *
     * @param  \App\Models\Note  $note
     * @return void
     */
    public function updated(Note $note)
    {
        
            $note->activity()->create([
                'project_id' => $note->project->id,
                'user_id' => $note->project->owner_id,
                'description' =>'note_updated',
                'changes' => [
                    'before' =>  Arr::except(array_diff($note->old,$note->getAttributes()),['updated_at']),
                    'after' =>  Arr::except(array_diff($note->getAttributes(),$note->old),['updated_at'])
                ]
            ]);

       
    }

    /**
     * Handle the Note "deleted" event.
     *
     * @param  \App\Models\Note  $note
     * @return void
     */
    public function deleted(Note $note)
    {
        $note->activity()->create([
            'project_id' =>$note->project->id,
            'user_id' => $note->project->owner_id,
            'description' => 'note_deleted'
        ]);
    }

    /**
     * Handle the Note "restored" event.
     *
     * @param  \App\Models\Note  $note
     * @return void
     */
    public function restored(Note $note)
    {
        //
    }

    /**
     * Handle the Note "force deleted" event.
     *
     * @param  \App\Models\Note  $note
     * @return void
     */
    public function forceDeleted(Note $note)
    {
        //
    }
}
