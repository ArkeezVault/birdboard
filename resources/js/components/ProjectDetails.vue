<template>
    <div class="h-screen  container mx-auto  grid grid-cols-5 divide-x divide-gray-200 overflow-hidden rounded-xl">

        <div class="col-start-1 col-end-2 p-2 bg-gray-50 ">
            <div class="flex items-center justify-around flex-wrap pt-2 w-full">
                <img  class ="w-16 " src="/image/origami blue.png" alt="">
                <h4 class="font-bold text-center text-2xl text-gray-600">birdboard</h4>
            </div>
            <div class="flex flex-col flex-wrap items-center mt-10 w-full ">
                <ul class="w-full ">
                    <li class=" p-3 ">                        
                        <router-link  :to="{ name: 'Dashboard' }" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5" src="/image/dashboard.svg" alt="dashboard">Dashboard</router-link>
                    </li>
                    <li class=" p-3 ">
                        <router-link  :to="{ name: 'members', params:{project:this.$route.params.project}}" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5" src="/image/audience.png" alt="Members">Members</router-link>
                    </li>
                    <li class=" p-3 ">
                        <a href="#" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5 " src="/image/work-time.svg" alt="activity">Activity</a>
                    </li>
                    <li class=" p-3 ">
                        <a href="#" @click="logout" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5 " src="/image/logout.svg" alt="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-start-2 col-end-5 bg-white ">
            <div class="flex justify-between p-5">
                <h5 class="text-gray-600 font-bold">{{ this.$route.params.project.title }}</h5>
                <div class="flex items-center justify-around w-1/5">
                    <h6 class="text-gray-600 font-bold"> {{ user.name }}</h6>
                    <img class="rounded-full h-8 w-8" src="/image/user.png"   v-bind:title="user.name" >
                </div>
            </div>
            <div class="p-5">
                <div class="text-gray-600 font-semibold flex items-center justify-between">
                    <div><h6>Tasks</h6></div>
                    <div>
                        <button v-b-modal.addTask-modal class="bg-darker  text-white w-24 flex items-center justify-between rounded p-1">
                            <img class="h-4 w-4" src="/image/plus.png" alt=""> Add Task
                        </button>

                        <div>
                            <b-modal  hide-footer id="addTask-modal" ref="modal" title="Add New Task">
                                <form  ref="form" @submit="onSubmit">
                                    <b-form-group label="Body" label-for="body-input" invalid-feedback="Body is required" >
                                        <b-form-input id="body-input" v-model="attributes.body"  required></b-form-input>
                                    </b-form-group>
                                    <input type="submit" class="bg-darker text-base font-medium text-white p-2 rounded" value="Add">
                                    <div v-if="addMessages !== null" >
                                        <li v-for="msg in addMessages" :key="msg" class="text-red-500 text-sm">
                                            <span v-for="m in msg" :key="m" class="text-red-500 text-sm"> {{ m}}</span> 
                                        </li>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                    </div>
                </div>
                <!-- Tasks -->
                <div class="flex items-center flex-wrap  p-4" >
                    <h3 v-if="!allTasks.length" class="text-red-400 text-sm">No Tasks Yet..</h3>
                    <div class="card" v-for="task in allTasks" :key="task.id">
                            
                        <div class="self-end m-1">
                            <button v-b-modal.edit-modal v-b-modal="'edit-modal'" tas="'task'" @click="sendInfo(task)">
                                <img class="h-5 w-5" src="/image/edit-bg.png" alt="edit-task">
                            </button>
                        </div>
                        <div class="text-gray-700 flex justify-start flex-wrap w-full truncate">
                            {{ task.body}}
                        </div>

                        <div v-if="project.can.manage" class="self-end m-1">
                            <button @click="delTask(task)"><img class="h-5 w-5" src="/image/delete.png" alt="delete-task"></button>
                        </div>
                    </div>   
                </div>
                <b-modal hide-footer id="edit-modal" ref="modal" title="Edit Task" >
                    <form ref="form" @submit="update(selectedTask)" >
                        <b-form-group label="Body" label-for="body-input" invalid-feedback="Body is required" >
                            <b-form-input id="body-input" v-model="selectedTask.body"  required></b-form-input>
                        </b-form-group>
                        <input type="submit" class="bg-darker text-base font-medium text-white p-2 rounded" value="Edit">
                        <div v-if="editMessages !== null" >
                            <li v-for="msg in editMessages" :key="msg" class="text-red-500 text-sm">
                                <span v-for="m in msg" :key="m" class="text-red-500 text-sm"> {{ m}}</span> 
                            </li>
                        </div>
                    </form>
                </b-modal>
            </div>

        </div>

        <div class="p-1 col-start-5 col-end-6 bg-white text-left text-xl font-semibold text-gray-600  ">
            <div class="mb-4">
                <div class="flex items-center justify-between  flex-wrap">
                    <div class="flex items-center flex-wrap mb-1"><h3>Members <span class="text-blue-500 text-sm">({{ allMembers.length  }})</span></h3></div>
                    <div>
                        <router-link  :to="{ name: 'members', params:{project:this.$route.params.project}}" class="text-sm underline text-gray-400">More!</router-link>
                    </div>
                </div>
                <div>
                    <ul class="flex items-center flex-wrap">
                        <li v-if="!allMembers.length" class="text-red-400 text-sm">No Members Yet</li>
                        <li>
                            <img  class="rounded-full h-8 w-8 bg-red-400" v-if="this.$route.params.project.owner.id == user.id" title="You(Admin)" src="/image/user.png"  >
                            <img  class="rounded-full h-8 w-8 bg-red-400" v-else v-bind:title="this.$route.params.project.owner.name" src="/image/user.png"  >
                        </li>
                        <li v-for="(member, index) in allMembers"  :key="member.id"  >
                            <img v-if="index < 2" class="rounded-full h-8 w-8" v-bind:title="member.name" src="/image/user.png"  >
                        </li>
                    </ul>
                </div>
                <div v-if="project.can.manage" class="flex flex-col items-center justify-center flex-wrap">
                    <button v-b-modal.addMem-modal class="bg-darker  text-sm mt-1 text-white w-9/12 rounded p-1">Add Member</button>
                    <div>
                        <b-modal  hide-footer id="addMem-modal" ref="modal" title="Add New Member" @hidden="resetModal">
                            <form  ref="form" @submit="invite">
                                <b-form-group label="Email" label-for="email-input" invalid-feedback="Email is required" >
                                    <b-form-input id="email-input"  type="email" v-model="email"  required></b-form-input>
                                </b-form-group>
                                <p v-if="message !== null" class="text-red-500 text-sm"> {{ message}}</p>
                                <input type="submit" class="bg-darker text-base font-medium text-white p-2  rounded" value="Invite">
                            </form>
                        </b-modal>
                    </div>
                </div>
            </div>
            
            <div>
                <div class="mb-1"><h3>Avtivity Feed</h3></div>
                <div class="overflow-auto ">
                    <ul class="overflow-y-auto">
                        <li v-for="activity in allActivities" :key="activity.id"  v-switch="activity.description " class=" text-xs text-gray-400">
                            <span v-case="'created_project'" class="flex items-center justify-between  ">Project created <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'updated_project'" class="flex items-center justify-between  ">Project updated <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'task_completed'" class="flex items-center justify-between  ">Task Completed <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'task_incompleted'" class="flex items-center justify-between  ">Task Incompleted <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'task_deleted'" class="flex items-center justify-between  ">Task deleted <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'task_created'" class="flex items-center justify-between  ">Task created <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-case="'task_updated'" class="flex items-center justify-between  ">Task updated <vue-moments-ago  prefix="" suffix="ago" v-bind:date="activity.created_at"></vue-moments-ago></span>
                            <span v-default >Default span </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import router from '../router';
import store from '../store';
import VSwitch from 'v-switch-case'
import VueMomentsAgo from 'vue-moments-ago'

Vue.use(VSwitch)

import {mapGetters, mapActions} from "vuex";

export default {
    name: "Tasks",
    computed: {
        ...mapGetters({
            allTasks:"allTasks",
            allActivities:"allActivities",
            allMembers:"allMembers",
            user: 'currentUser',
            projjj: 'currentProject'
            })
    },
    components: { VueMomentsAgo },
    data(){
        return{
            email:'',
            project:'',
            ProjectID:'',
            selectedTask:'',
            attributes:
            {
                body: '',
                completed: false,
                project_id: this.$route.params.project.id,
            },
            message:'',
            addMessages:'',
            editMessages:'',

        };
    },
    methods: {
        ...mapActions(['fetchTask','deleteTask','addTask','updateTask','fetchActivity','fetchMember','addMember']),
        onSubmit(e)
        {
            e.preventDefault();
            this.addTask( this.attributes).then(() => {
                this.clearInputs();
                this.$nextTick(() => {this.$bvModal.hide('addTask-modal')});
            }).catch(error => {
                // console.log('data: ',error.response.data);
                // console.log('status code: ',error.response.status);
                if (error.response)
                {
                    this.addMessages = Object.values(error.response.data.errors);
                }
            });
            //this.$nextTick(() => {this.$bvModal.hide('addTask-modal')});
        },
        invite(e)
        {
            e.preventDefault();
            const att = {
                project_id: this.$route.params.project.id,
                email:this.email
            };
            this.addMember(att).then(result => {
                if(result === 'user successfully invited')
                    {
                        this.$nextTick(() => {this.$bvModal.hide('addMem-modal')});
                    }
                else
                    {
                        this.message = result;
                    }
                });

        },
        sendInfo(task) 
        {
            this.selectedTask = task;
        },
        update(selectedTask)
        {
            const updTask = {
                id:selectedTask.id,
                body: selectedTask.body,
                ProjectID:this.$route.params.project.id,
            };
            this.updateTask(updTask).then(() => {
                this.clearInputs();
                this.$nextTick(() => {this.$bvModal.hide('edit-modal')});
            }).catch(error => {
                // console.log('data: ',error.response.data);
                // console.log('status code: ',error.response.status);
                if (error.response)
                {
                    console.log('DDDDDDData: ',error.response.data);
                    this.editMessages = Object.values(error.response.data.errors);
                }
            });
            //this.$nextTick(() => {this.$bvModal.hide('edit-modal')});

        },
        delTask(task)
        {
            const att = {
                proj_ID:this.$route.params.project.id,
                task: task,
            };
            this.deleteTask(att);
        },
        logout() 
        {
            store.dispatch('logout').then(() => {
                this.$router.push('/login');
            });
        },
        resetModal() 
        {
            this.email = '';
            this.message = '';
        },
         clearInputs() 
         {
            this.attributes.body = '';
            this.addMessages ='';
            this.editMessages ='';
            //this.addMessages.splice(0);
        }
    },
     created(){
        this.ProjectID = this.$route.params.project.id;
        this.project = this.$route.params.project;
        this.fetchTask(this.$route.params.project.id);
        this.fetchActivity(this.$route.params.project.id);
        this.fetchMember(this.$route.params.project.id);
        store.dispatch('getUser');


        
    },
    
}
</script>