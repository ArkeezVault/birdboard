import Vuex from 'vuex';
import Vue from 'vue';
import Projects from './modules/Projects';
import task from './modules/task';
import auth from './modules/auth';


import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

//load vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        Projects,
        task,
        auth
        
    }
});