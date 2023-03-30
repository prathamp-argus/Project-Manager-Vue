import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      projects : [
        {   id:1,
            projectTitle : '10th Project',
            description : 'this is my 10th project',
            completed : true 
        },
        {   id:2,
            projectTitle : '11th Project',
            description : 'this is my 11th project',
            completed : false 
        },
        {   id:3,
            projectTitle : '12th Project',
            description : 'this is my 12th project',
            completed : true 
        },
    ],
    
    };
  },
  mutations,
  actions,
  getters
};