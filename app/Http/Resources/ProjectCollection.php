<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

use App\Models\Project;

use Illuminate\Support\Facades\Gate;


class ProjectCollection extends ResourceCollection
{
    public $collects = ProjectResource::class;


    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return parent::toArray($request);
        // return [
        //     'data' => $this->collection
        // ];
    }

    // public function with($request)
    // {
    //     return [
    //         'can' => [
    //             'delete' => Gate::allows('delete', Project::class),
    //         ],
    //     ];
    // }
}
