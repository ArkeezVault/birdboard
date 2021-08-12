<template>
    <div class=" rounded-2xl  h-screen container mx-auto grid grid-cols-6 divide-x divide-gray-200">
            <div class="bg-white col-start-1 col-end-4 h-full flex items-center justify-center">
                <img src="/image/list.png" alt="" class="object-contain">
            </div>
            <div class=" bg-white col-start-4 col-end-7   h-full flex items-center  justify-center">
                <form @submit.prevent="register()" class="w-4/5 ">
                    <div class="flex items-center justify-around flex-wrap pt-0 w-full mb-10">
                        <img  class ="w-16 " src="/image/origami blue.png" alt="">
                        <h3 class="  font-bold text-gray-600">Birdboard</h3>
                    </div>
                    <div >
                        <label for="name" class="text-gray-700">Name</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200 " type="text" name="name" v-model="name" placeholder="enter name">
                    </div>
                    <div >
                        <label for="email" class="text-gray-700">Email</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200" type="email" name="email" v-model="email" placeholder="enter email">
                    </div>        
                    <div>
                        <label for="password" class="text-gray-700">Password</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200" type="password" name="password" v-model="password" placeholder="enter passwpord">
                    </div>
                    <div>
                        <label for="Confirm Password" class="text-gray-700" >Confirm Password</label>
                        <br>
                        <input class="w-full mb-3 p-1 border-2 rounded-sm border-gray-200" type="password" name="password_confirmation" v-model="password_confirmation" placeholder="enter passwpord again">
                    </div>
                    <div >
                        <input class="bg-darker text-white mb-1  w-full p-1 rounded-md" type="submit" value="Register">
                    </div>
                    <div class="text-right underline text-gray-500">
                        <router-link to="/login">Aleardy has Account?</router-link>
                    </div>

                    <div v-if="messages !== null" >
                        <li v-for="msg in messages" :key="msg" class="text-red-500 text-sm">
                            <span v-for="m in msg" :key="m" class="text-red-500 text-sm"> {{ m}}</span> 
                        </li>
                    </div>
                </form>
            </div>
        </div>
</template>

<script>
import store from '../store';

export default {
    data() {
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',

                messages:{},
                Arr:'',

            }
        },
     methods: {
            register() 
            {
               
                store.dispatch('register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                }).then(() => {
                    this.clearInputs();
                    this.$router.push('/Dashboard');
                }).catch(error => {
                    if (error.response)
                     {
                        console.log('data: ',error.response.data);
                        console.log('status code: ',error.response.status);

                        this.messages = Object.values(error.response.data.errors);
                        this.Arr = Object.values(this.messages);

                        // if (error.response.status == 422) {
                        //     const errors = Object.values(error.response.data.errors).map(error => {
                        //         return '<li>' + error + '</li>'
                        //     }).join();
                        //     Materialize.toast('<ul>' + errors + '</ul>', 5000);
                        // }
                    }
                });
            },
            clearInputs() {
                this.name = '';
                this.email = '';
                this.password = '';
                this.password_confirmation = '';

               // this.messages = '';

            }
        },
    
}
</script>