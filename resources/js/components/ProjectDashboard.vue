<template>
    <div class="h-screen container   grid grid-cols-5 divide-x divide-gray-200 overflow-hidden rounded-xl">

        <div class="col-start-1 col-end-2 p-2 bg-gray-50 ">
            <div class="flex items-center justify-around flex-wrap pt-2">
                <img  class ="w-16 " src="/image/origami blue.png" alt="">
                <h4 class="font-bold text-center text-2xl text-gray-600">birdboard</h4>
            </div>
            <div class="flex flex-col flex-wrap items-center mt-10 w-full ">
                <ul class="w-full ">
                    <li class=" p-3  ">                        
                        <router-link :to="{ name: 'Dashboard' }" class="flex items-center justify-around w-4/5  text-gray-700"><img  class="h-5 w-5" src="/image/dashboard.svg" alt="dashboard">Dashboard</router-link>
                    </li>
                    <!-- <li class=" p-3 ">
                        <a href="member.html" class="flex items-center justify-around w-4/5  text-gray-700"><img  class="h-5 w-5" src="/image/audience.png" alt="setting">Members</a>
                    </li>
                    <li class=" p-3 ">
                        <a href="#" class="flex items-center justify-around w-4/5  text-gray-700"><img  class="h-5 w-5" src="/image/work-time.svg" alt="activity">Activity</a>
                    </li> -->
                    <li class=" p-3 ">
                        <a href="#" @click="logout" class="flex items-center justify-around w-4/5  text-gray-700"><img  class="h-5 w-5" src="/image/logout.svg" alt="logout">Logout</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="col-start-2 col-end-6 bg-white ">
            <div class="flex justify-between p-5 w-full">
                <h5 class="text-gray-600 font-bold">Projects Dashboard</h5>
                <div class="h-8 w-8 flex items-center justify-center">
                    <h6 class="text-gray-600 font-bold"> {{ user.name }}</h6>
                    <img class="rounded-full" src="/image/user.png"  alt="">
                </div>
            </div>

            <div class="p-5 w-full">
                <div class="text-gray-600 font-semibold flex items-center justify-between">
                    <div>
                        <button v-b-modal.add-modal class="bg-darker  text-white w-28 flex items-center justify-between rounded p-1">
                            <img class="h-4 w-4" src="/image/plus.png" alt=""> Add Project
                        </button>
                    
                        <div>
                            <b-modal hide-footer id="add-modal" ref="modal" title="Add New Project">
                                <form ref="form" @submit="onSubmit" >
                                    <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required" >
                                        <b-form-input id="title-input" v-model="att.title"  required></b-form-input>
                                    </b-form-group>

                                    <b-form-group label="Description" label-for="description-input" invalid-feedback="Description is required" >
                                        <b-form-textarea id="description-input" v-model="att.description" size="lg" required></b-form-textarea>
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
                <!-- projects -->
                <div class="flex items-center flex-wrap " >
                    <h3 v-if="!allProjects.length" class="text-red-400 text-sm">No Projcts Yet..</h3>
                    <!-- cards -->
                    <div class="card" v-for="project in allProjects" :key="project.id">
                        <div class="flex items-center flex-wrap justify-between w-full ">
                            <div>
                                <router-link class="text-gray-700 truncate p-2 border-l-4 border-solid border-darker -ml-2" :to="{ name: 'ProjectDetails', params: {project: project  } }">{{ project.title }}</router-link>
                            </div>
                            <div>
                                <button v-b-modal.edit-modal v-b-modal="'edit-modal'" proj="'project'" @click="sendInfo(project)">
                                    <img class="h-5 w-5" src="/image/edit-bg.png" alt="edit-project">
                                </button>
                            </div>
                        </div>
                        <div class="text-gray-500 text-sm  flex justify-start flex-wrap w-full truncate ">
                            {{ project.description }}
                        </div>
                        <div v-if="project.can.manage" class="self-end m-1 ">
                            <button @click="deleteProject(project.id)"><img class="h-5 w-5" src="/image/delete.png" alt="delete-project"></button>
                        </div>
                    </div>
                    
                </div>
                <b-modal hide-footer id="edit-modal" ref="modal" title="Edit Project" >
                        <form ref="form" @submit="update(selectedProject)" >
                            <b-form-group label="Title" label-for="title-input" invalid-feedback="Title is required" >
                                <b-form-input id="title-input" v-model="selectedProject.title"  required></b-form-input>
                            </b-form-group>

                            <b-form-group label="Description" label-for="description-input" invalid-feedback="Description is required" >
                                <b-form-textarea id="description-input" v-model="selectedProject.description" size="lg" required></b-form-textarea>
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

        <!-- <div class=" bg-white p-4 col-start-5 col-end-6 text-left text-xl font-semibold text-gray-600 ">
            <div class=" h-full"><h3>Avtivity Feed</h3></div>
            
        </div> -->
        
    </div>
</template>

<script>
import modal from './modal.vue'
import store from '../store';

import {mapGetters, mapActions} from "vuex";

export default {
    name: "Projects",
    computed: {
    ...mapGetters({
        allProjects: 'allProjects',
        Projs: 'allProjects',
        user: 'currentUser'}),
    
    },
    
    data() {
      return {
        isModalVisible: false,
        myArr:[],
        arrIDs:[],
        count:'',
        arrProjs:[],
        addMessages:'',
        editMessages:'',
        
        att:
        {
            title: '',
            description: '',
        },
        selectedProject: '',
      };
    },
    components: 
    {
        modal,
    },
    methods: {
        ...mapActions(['fetchProject','deleteProject','addProject','updateProject','fetchActivity','fetchSumActivity','fetchSumActivity2']),
        onSubmit(e){
            e.preventDefault();
            this.addProject(this.att).then(() => {
                this.clearInputs();
                this.$nextTick(() => {this.$bvModal.hide('add-modal')});
            }).catch(error => {
                // console.log('data: ',error.response.data);
                // console.log('status code: ',error.response.status);
                if (error.response)
                {
                    this.addMessages = Object.values(error.response.data.errors);
                }
            });
            // Hide the modal manually
            //this.$nextTick(() => {this.$bvModal.hide('add-modal')});
            //this.clearInputs();
        },
        update(selectedProject)
        {
            const updProject = {
                id:selectedProject.id,
                title: selectedProject.title,
                description: selectedProject.description
            };
            
            this.updateProject(updProject).then(() => {
                this.clearInputs();
                this.$nextTick(() => {this.$bvModal.hide('edit-modal')});
            }).catch(error => {
                // console.log('data: ',error.response.data);
                // console.log('status code: ',error.response.status);
                if (error.response)
                {
                    this.editMessages = Object.values(error.response.data.errors);
                }
            });
            //this.$nextTick(() => {this.$bvModal.hide('edit-modal')});

        },
        clearInputs() {
            this.att.title = '';
            this.att.description = '';
            this.addMessages ='';
            this.editMessages ='';
        },
        sendInfo(project) {
        this.selectedProject = project;
         },
        logout() {
            store.dispatch('logout').then(() => {
                this.$router.push('/login');
            });
        },
        resetModal() {
            this.name = ''
            this.nameState = null
        },
      
    },
    
    created(){
        this.fetchProject();
        //this.fetchSumActivity(this.myArr);
        //this.fetchSumActivity2(this.arrIDs);
        //this.fetchActivity(this.ProjectID);

        store.dispatch('getUser');
    },
    mounted() {
        
        //this.fetchSumActivity2(this.arrIDs);

            // store.dispatch('getUser').catch(error => {
            //     if (error.response) {
            //         this.checkResponse(error.response.status);
            //     }
            // });
        }
    
}
</script>
