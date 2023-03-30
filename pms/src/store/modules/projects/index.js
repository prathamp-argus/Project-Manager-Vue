import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      projects : [
        {
            projectTitle : '10th Project',
            description : 'this is my 10th project',
            completed : true 
        },
        {
            projectTitle : '11th Project',
            description : 'this is my 11th project',
            completed : false 
        },
        {
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