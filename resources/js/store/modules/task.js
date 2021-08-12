import axios from 'axios';
//import tasks from '../../api/projects';
import auth from '../../api/auth';



const state  = {
    tasks:[]
};
const getters = {
    allTasks: (state) => state.tasks,
};
const actions = {
    async fetchTask ({commit},id){
        
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/tasks`,
                        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('in fetch tasks, respon.data: ',response.data);

        commit('setTask',response.data)
    },
    async addTask ({commit},attributes){
        const ress = await axios.post(`http://127.0.0.1:8000/api/projects/${attributes['project_id']}/tasks`,{
                        body:attributes.body,
                        completed:false
                    },
                         {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('store task response.data.data: ',ress.data.data);

        commit('newtask',ress.data.data)
    },
    async deleteTask ({commit},att){
        console.log('att: ',att);
        console.log('task: ',att.task);
        console.log('proj_id: ',att.proj_ID);
        console.log('task_id: ',att.task.id);


        const ress = await axios.delete(`http://127.0.0.1:8000/api/projects/${att.proj_ID}/tasks/${att.task.id}`,
                    {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('delete response: ',ress);
        console.log('delete response.data: ',ress.data);

        commit('removeTask',att.task.id)
    },
    async updateTask({ commit },updTask) {
        const response = await axios.patch(`http://127.0.0.1:8000/api/projects/${updTask.ProjectID}/tasks/${updTask.id}`,{
            body:updTask.body,
        },
        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('updated proj,response.data: ',response.data);
        console.log('updated proj,response.data.data: ',response.data.data);
        commit('updateTask', response.data.data);


    }
};
const mutations = {
    setTask:(state,tasks) => (state.tasks=tasks),
    newtask:(state,task) => state.tasks.unshift(task),
    removeTask:(state,id) =>(state.tasks = state.tasks.filter(task => task.id !== id)),
    updateTask: (state, updTask) => {
        const taskObj = state.tasks.find(stateTask => stateTask.id == updTask.id);
        Vue.set(taskObj, 'body', updTask.body);
    }
        
    //     const index = state.projects.findIndex(project => project.id === updProject.id);
    //     if (index !== -1) 
    //     {
    //       state.projects.splice(index, 1, updProject);
    //     }
    //   }

    // const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    //     if (index !== -1) 
    //     {
    //       state.todos.splice(index, 1, updTodo);
    //     }
    //   }
    
    
};

export default {
    state,
    getters,
    actions,
    mutations
};
