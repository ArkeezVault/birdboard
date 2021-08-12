<template>

 <div class=" rounded-xl  h-screen container  grid grid-cols-6 divide-x divide-gray-200 overflow-hidden ">
            <div class=" bg-white col-start-1 col-end-4  h-full flex items-center justify-center">
                <!-- <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Stroke copy 3"><path d="M42 47a24 24 0 01-24-24V7h-7v44a4 4 0 004 4h36v-8z" fill="#cff09e"/>
                    <path d="M15 3h36v8H15a4 4 0 01-4-4 4 4 0 014-4z" fill="#a8dba8"/><path fill="#79bd9a" d="M21 19h22v6H21z"/>
                    <circle cx="47" cy="47" r="14" fill="#a8dba8"/></g><g data-name="Stroke Close copy 3" fill="#3b8686">
                    <path d="M17 8h10a1 1 0 000-2H17a1 1 0 000 2z"/>
                    <path d="M52 32.88V3a1 1 0 00-1-1H15a5 5 0 00-5 5v44a5 5 0 005 5h20a15 15 0 1017-23.12zM15 4h35v2H31a1 1 0 000 2h19v2H15a3 3 0 010-6zm0 50a3 3 0 01-3-3V11a4.92 4.92 0 003 1h35v20.3a14.82 14.82 0 00-3-.3 15 15 0 00-13.26 22zm32 6a13 13 0 1113-13 13 13 0 01-13 13z"/><path d="M53.85 41.22L43.24 51.83l-3.53-3.54a1 1 0 00-1.42 1.42L42.54 54a1 1 0 00.7.29A1 1 0 0044 54l11.26-11.36a1 1 0 000-1.42 1 1 0 00-1.41 0zM21 26h22a1 1 0 001-1v-6a1 1 0 00-1-1H21a1 1 0 00-1 1v6a1 1 0 001 1zm1-6h20v4H22zM21 32h16a1 1 0 000-2H21a1 1 0 000 2zM31 36H21a1 1 0 000 2h10a1 1 0 000-2zM27 42h-6a1 1 0 000 2h6a1 1 0 000-2z"/></g>
                </svg> -->
                <img src="/image/list.png" alt="" class="object-contain">
            </div>
            <div class=" bg-white col-start-4 col-end-7  h-full flex items-center justify-center ">
                <form @submit.prevent="login()"  class="w-4/5">
                    <div class="flex items-center justify-around flex-wrap pt-0 w-full mb-10">
                        <img  class ="w-16 " src="/image/origami blue.png" alt="">
                        <h3 class="  font-bold text-gray-600">Birdboard</h3>
                    </div>
                    <div >
                        <label for="email" class="text-gray-700">Email</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200" type="email" name="email"  v-model="email" placeholder="enter email">
                    </div>        
                    <div>
                        <label for="password" class="text-gray-700">Password</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200" type="password" name="password"  v-model="password" placeholder="enter password">
                    </div>
                    <div >
                        <input class="bg-darker text-white mb-1  w-full p-1 rounded-md" type="submit" value="login">
                    </div>
                    <div class="text-right underline text-gray-500">
                        <router-link to="/register">New To Birdbord?</router-link>
                    </div>

                    <p v-if="message !== null" class="text-red-500 text-sm"> {{ message}}</p>

                </form>
            </div>
        </div>
</template>

<script>
import store from '../store';
import {mapActions} from "vuex";

export default {
    data() 
    {
        return {
            email: '',
            password: '',

            message:'',
        }
    },
    methods: {
     ...mapActions(['login']),

        login() 
        {
            store.dispatch('login', {
                email: this.email,
                password: this.password,
            }).then(() => {
                this.clearInputs();
                this.$router.push('/Dashboard');
            }).catch(error => {
                // console.log('data: ',error.response.data);
                // console.log('status code: ',error.response.status);
                if (error.response)
                {
                    if(error.response.status == 401)
                    {
                        this.message = 'Invalid Credentials, please check your Credentials';
                    }
                }

                
            });
        },
        // login(){
        //     this.login({
        //         email: this.email,
        //         password: this.password}).then(result => {
        //             if(result.hasOwnProperty('error'))
        //                 {
        //                     console.log(result['error'])
        //                     //this.$nextTick(() => {this.$bvModal.hide('addMem-modal')});
        //                 }
        //             else
        //                 {
        //                     this.$router.push('/Dashboard');
        //                     this.clearInputs();
        //                    // this.message = result;
        //                 }
        //         });

            
        // },
        clearInputs() {
            this.email = '';
            this.password = '';
            this.message = '';
        }
    }
    
}
</script>