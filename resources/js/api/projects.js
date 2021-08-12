import auth from './auth';
import axios from 'axios';


export default {
    getProjects() {
        return axios.get('http://127.0.0.1:8000/api/projects',
            {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
    },
    createProject(att) {
        return axios.post('http://127.0.0.1:8000/api/projects', {att}, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        });
    },
    markTaskAsDone(task) {
        return axios.post('/api/user/task/' + task.id + '/done', {}, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        });
    },
    updateTask(task) {
        return axios.put('/api/user/task/' + task.id, {text: task.text}, {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        });
    },
    deleteTask(task) {
        return axios.delete('/api/user/task/' + task.id , {
            headers: {'Authorization': 'Bearer ' + auth.getToken()}
        });
    }
}