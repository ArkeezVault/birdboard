<template>
    <div class="h-screen  container mx-auto  grid grid-cols-5 divide-x divide-gray-200 overflow-hidden rounded-xl">

        <div class="col-start-1 col-end-2 p-2 bg-gray-50  ">
            <div class="flex items-center justify-around flex-wrap pt-2 w-full">
                <img  class ="w-16 " src="/image/origami blue.png" alt="">
                <h4 class="font-bold text-center text-2xl text-gray-700">birdboard</h4>
            </div>
            <div class="text-gray-500  text-sm  flex flex-col flex-wrap items-center mt-10 w-full ">
                <ul class="w-full ">
                    <li class=" p-3 ">                        
                        <router-link  :to="{ name: 'Dashboard' }" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5" src="/image/dashboard.svg" alt="dashboard">Dashboard</router-link>
                    </li>
                    <li class=" p-3 ">
                        <a href="#" class="flex items-center justify-around w-4/5 text-gray-700"><img  class="h-5 w-5 " src="/image/audience.png" alt="setting">Members</a>
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

        <div class="col-start-2 col-end-6 bg-white ">
            <div class="flex justify-between p-5">
                <!-- <h5 class="text-gray-600 font-bold">{{ this.$route.params.project.title }}</h5> -->
                <router-link  :to="{ name: 'ProjectDetails', params:{project:this.$route.params.project}}" class="text-gray-600 font-bold">
                   {{ this.$route.params.project.title }}
                </router-link>

                <div class="flex items-center justify-around w-1/5">
                    <h6 class="text-gray-600 font-bold"> {{ user.name }}</h6>
                    <img class="rounded-full h-8 w-8" src="/image/user.png"   v-bind:title="user.name" >
                </div>
            </div>
            <div class="p-5">
                <div class="text-gray-600 font-semibold flex items-center justify-between">
                    <div class="mb-2">
                        <h6>Members<span class="text-blue-500 text-sm ">({{ allMembers.length  }})</span></h6>
                    </div>
                    <div  v-if="project.can.manage">
                        <button v-b-modal.addMem-modal class="bg-darker flex justify-center text-sm mt-1 text-white w-24 rounded p-1">Add Member</button>
                        <div>
                            <b-modal  hide-footer id="addMem-modal" ref="modal" title="Add New Member" @hidden="resetModal">
                                <form ref="form" @submit="invite">
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
                <!-- members -->
                <div class="">
                    <h3 v-if="!allMembers.length" class="text-red-400 text-sm">No Members Yet</h3>
                    <div class="flex items-center justify-between flex-wrap mb-2">
                        <div class="flex items-center justify-around flex-wrap">
                            <img class="rounded-full w-8 h-8 bg-red-400" src="/image/user.png" v-if="this.$route.params.project.owner.id == user.id" title="You(Admin)">
                            <img class="rounded-full w-8 h-8 bg-red-400" src="/image/user.png"  v-else v-bind:title="this.$route.params.project.owner.name">

                            <h6 class="p-2 font-bold" v-if="this.$route.params.project.owner.id == user.id">{{this.$route.params.project.owner.name}} (You-Admin) </h6>
                            <h6 class="p-2 font-bold" v-else>{{this.$route.params.project.owner.name}} (Admin) </h6>

                        </div>
                    </div>
                    <div v-for="member in allMembers" :key="member.id" class="flex items-center justify-between flex-wrap mb-2">
                        <div class="flex items-center justify-around flex-wrap">
                            <img class="rounded-full w-8 h-8" src="/image/user.png"  v-bind:title="member.name">
                            <h6 class="p-2">{{member.name}}</h6>
                        </div>
                        <button v-if="project.can.manage" @click="delMember(member)" class="bg-red-500  text-white w-14  rounded p-1" >Delete</button>
                    </div> 
                </div>
            </div>

        </div>

        <!-- <div class="p-1 col-start-5 col-end-6 bg-white text-left text-xl font-semibold text-gray-600  ">
            <div class="mb-1"><h3>Avtivity Feed</h3></div>
            <div>
                <ul class="overflow-y-scroll">
                    <li v-for="activity in allActivities" :key="activity.id" class="text-sm text-gray-400">{{ activity.description }}</li>
                </ul>
            </div>
        </div> -->
        
    </div>
</template>

<script>
import router from '../router';
import store from '../store';

import {mapGetters, mapActions} from "vuex";

export default {
    name: "Members",
    computed: {
        ...mapGetters({
            allMembers:"allMembers",
            user: 'currentUser'
            })
    },
    data(){
        return{
            email:'',
            message:'',
            project:'',
        }
    },
    methods:{
        ...mapActions(['fetchMember','deleteMember','addMember']),
    
        logout() {
            store.dispatch('logout').then(() => {
                this.$router.push('/login');
            });
        },
        delMember(member)
        {
            const att = {
                proj_id:this.$route.params.project.id,
                member: member,
            };
            this.deleteMember(att);
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
        resetModal() 
        {
            this.email = '';
            this.message = '';
        }
    },
     created(){
        this.fetchMember(this.$route.params.project.id);
        this.project = this.$route.params.project;
        //this.Project_id = this.$route.params.project;

    }
}
</script>