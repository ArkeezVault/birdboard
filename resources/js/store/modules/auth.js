import auth from '../../api/auth';
import axios from 'axios';


const state = {
    loggedIn: auth.loggedIn(),
    user: {},
};

const getters = {
    currentUser(state) {
        return state.user;
    },
    isLoggedIn(state) {
        return state.loggedIn && state.user;
    },
};

const actions = {
    async register({commit}, userData) {
        const ress = await axios.post('/api/auth/register', {
            email: userData.email,
            name: userData.name,
            password: userData.password,
            password_confirmation: userData.password_confirmation
        });
        console.log('*from Register: ',ress);

        commit('setAuth', ress.data.data);

        // return new Promise((resolve, reject) => {
        //     auth.registerUser(userData).then(response => {
        //         commit('setAuth', response.data.data);
        //         resolve(response);
        //     }).catch(error => {
        //         reject(error);
        //     })
        // });
    },
    async login({commit}, userData) 
    {
        // return new Promise((resolve, reject) => {
        //     auth.loginUser(userData).then(response => {
        //         commit('setAuth', response.data.data);
        //         resolve(response);
        //     }).catch(error => {
        //         reject(error);
        //     })
        // });
        //console.log('before axios');

        const ress = await axios.post('/api/auth/login',{
            email: userData.email,
            password: userData.password,});

        console.log('login response: ',ress);

        commit('setAuth',ress.data.data)
    },
    async getUser({commit}) 
    {
        const ress = await axios.get('/api/auth/user',
            {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        
        console.log('##from get user: ',ress);
        commit('setAuth', ress.data.data);


        // return new Promise((resolve, reject) => {
        //     auth.getUser().then(response => {
        //         commit('setAuth', response.data.data);
        //         resolve(response);
        //     }).catch(error => {
        //         reject(error);
        //     })
        // });
    },

    logout({commit}) {
        commit('setLogout');
    }
};

const mutations = {
    setAuth(state, user) {
        state.user = user;
        state.loggedIn = true;
        auth.setToken(state.user.token);
    },
    setLogout(state) {
        state.user = {};
        state.loggedIn = false;
        auth.destroyToken();
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};