import axios from 'axios';
import proj from '../../api/projects';
import auth from '../../api/auth';



const state  = {
    projects:[],
    activities:[],
    sumActivities:[],
    members:[],
    
};
const getters = {
    allProjects: (state) => state.projects,
    allActivities: (state) => state.activities,
    allSumActivities: (state) => state.sumActivities,
    allMembers: (state) => state.members,
};
const actions = {  
    async fetchProject ({commit}){
        
        //const response = proj.getProjects();
        const response = await axios.get('http://127.0.0.1:8000/api/projects',
                        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('in fetch projs, respon.data: ',response.data);
        console.log('in fetch projs, respon.data.data: ',response.data.data);


        commit('setProject',response.data.data)
    },
    async addProject ({commit},att){
        console.log('att: ',att);
        console.log('title: ',att.title);
        //const response = tasks.createProject(att);
        const ress = await axios.post('http://127.0.0.1:8000/api/projects',{
                        title:att.title,
                        description:att.description,
                    },
                         {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('store response: ',ress);
        console.log('store response.data: ',ress.data);
        console.log('store response.data.data: ',ress.data.data);



        commit('newproject',ress.data.data)
    },
    async deleteProject ({commit},id){
        const ress = await axios.delete(`http://127.0.0.1:8000/api/projects/${id}`,
                    {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('delete response: ',ress);
        console.log('delete response.data: ',ress.data);

        commit('removeProject',id)
    },
    async updateProject({ commit }, updProject) {
        const response = await axios.put(`http://127.0.0.1:8000/api/projects/${updProject.id}`,{
            title:updProject.title,
            description:updProject.description,
        },
        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('updated proj,response.data: ',response.data);
        console.log('updated proj,response.data.data: ',response.data.data);
        commit('updateProject', response.data.data);


    },
    async fetchActivity ({commit},id){
        
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/activities`,
                        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('in fetch activity, respon.data: ',response.data);

        commit('setActivity',response.data)
    },
    async fetchSumActivity ({commit},IDs){
        console.log('datatype: ',typeof IDs);
        console.log('in Summary activity: ',IDs);
        console.log('afffteer');
       
          console.log('IDS length: ',IDs.length);
          console.log('first indexs: ',IDs[1]);
          const Arr = [];
        // for (let i = 0; i < IDs.length; i++) 
        // {

        //     console.log('from loop: ',IDs[i]);
        //     const res = await axios.get(`http://127.0.0.1:8000/api/projects/${IDs[i]}/activities`,
        //                      {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        //     Arr.push(res.data);
        // }
        // let allids = JSON.stringify(IDs);
        // console.log('ids after convert: ',allids);

        var parsedobj = JSON.parse(JSON.stringify(IDs));
        console.log('2-ids after convert: ',parsedobj);



        // for(let id of allids)
        // {
        //     console.log('show: ',id);
        // }+++
        for(let ii of parsedobj)
        {
            console.log('look: ',ii);
        }
        
        //console.log('All respons: ',Arr);


        //commit('setSumActivity',response.data)
    },
    async fetchSumActivity2 ({commit},IDs){
        console.log('2-datatype: ',typeof IDs);
        console.log('2-in Summary activity: ',IDs);
        console.log('2-afffteer');
       
          console.log('2-IDS length: ',IDs.length);
          console.log('2-first indexs: ',IDs[1]);
          let allids = JSON.stringify(IDs);
        console.log('ids after convert: ',allids);

        for(let id of allids)
        {
            console.log('show: ',id);
        }
        
    },
    async addMember ({commit},att){
        console.log('email: ',att.email);
        const response = await axios.post(`http://127.0.0.1:8000/api/projects/${att.project_id}/invite`,
                        {email:att.email},
                        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('invite response: ',response);
        console.log('invite response.data: ',response.data);
        //console.log('invite response.data.data: ',response.data.data);
        //console.log('invite response.data.data.original: ',response.data.data.original);

        

        if(response.data.data.hasOwnProperty('original'))
        {
            console.log('Yessssssss it has origin: ');
            console.log('msg body: ',response.data.data.original.msg);
            
            return response.data.data.original.msg;

        }
        else
        {
            console.log('No origin');
            console.log('No error All IS GOOD');
            console.log('invite response.data.data: ',response.data.data);

            commit('newmember',response.data.data);
            
            return response.data.msg;
        }

        // if(response.data.hasOwnProperty('original'))
        // {
        //     console.log('HHHHHHHHHHHH ');

        // }

        // if(response.data.data.original === undefined)
        // {
        //     console.log('No error All IS GOOD');
        //     console.log('invite response.data.data: ',response.data.data);

        //     commit('newmember',response.data.data);
            
        //     return response.data.msg;

        // }
        // else
        // {
        //     console.log('yes it has ORIGINAL with msg');
        //     console.log('msg body: ',response.data.data.original.msg);
            
        //     return response.data.data.original.msg;
        // }

        
    },
    async fetchMember ({commit},id){
        
        const response = await axios.get(`http://127.0.0.1:8000/api/projects/${id}/members`,
                        {headers: {'Authorization': 'Bearer ' + auth.getToken()}});

        console.log('in fetch members, respon.data: ',response.data);

        commit('setMember',response.data)
    },
    async deleteMember ({commit},att){
        const ress = await axios.delete(`http://127.0.0.1:8000/api/projects/${att.proj_id}/members/${att.member.id}`,
                    {headers: {'Authorization': 'Bearer ' + auth.getToken()}});
        console.log('deleteMember response: ',ress);
        console.log('deleteMember response.data.data: ',ress.data.data);

        commit('removeMember',att.member.id)
    }
};
const mutations = {
    setProject:(state,projects) => (state.projects=projects),
    setActivity:(state,activities) => (state.activities=activities),
    setSumActivity:(state,sumActivities) => (state.sumActivities=sumActivities),

    setMember:(state,members) => (state.members=members),
    newproject:(state,project) => state.projects.unshift(project),
    newmember:(state,member) => state.members.unshift(member),
    removeProject:(state,id) =>(state.projects = state.projects.filter(project => project.id !== id)),
    removeMember:(state,id) =>(state.members = state.members.filter(member => member.id !== id)),
    updateProject: (state, updProject) => {
        const projObj = state.projects.find(stateProject => stateProject.id == updProject.id);
        Vue.set(projObj, 'title', updProject.title);
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
