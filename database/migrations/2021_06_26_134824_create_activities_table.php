<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('project_id');
            $table->unsignedInteger('user_id');
           // $table->nullableMorphs('subject',250);//i can use this instead of the 2 below line('subject_id/type).or make it ($table->morphs('subject');)
            $table->unsignedInteger('subject_id')->nullable();
            $table->string('subject_type')->nullable();
            $table->string('description');
            $table->text('changes')->nullable();
            $table->timestamps();

           $table->foreign('project_id')->references('id')->on('projects')->onDelete('cascade');
           $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
