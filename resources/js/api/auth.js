export default {
    registerUser(userData) {
        return axios.post('/api/auth/register', {
            email: userData.email,
            name: userData.name,
            password: userData.password,
            password_confirmation: userData.password_confirmation
        });
    },

    loginUser(userData) {
        console.log('b4  axios');

        const ress = axios.post('/api/auth/login', {
            email: userData.email,
            password: userData.password,
        });
        console.log(ress);
        return ress;
    },

    getUser() {
        console.log('In Get User Method');

        return axios.get('/api/user',
            {headers: {'Authorization': 'Bearer ' + this.getToken()}});
    },

    loggedIn() {
        return !!localStorage.getItem('token');
    },

    setToken(token) {
        localStorage.setItem('token', token);
        console.log('after set token: ',token);
    },

    destroyToken() {
        localStorage.removeItem('token')
    },

    getToken() {
        return localStorage.getItem('token');
    }

}