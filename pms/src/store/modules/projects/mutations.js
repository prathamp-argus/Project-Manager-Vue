export default {
    setProjects(state, payload) {
        state.projects = payload;
      },
    createProject(state,payload){
      state.projects.push(payload);
    }
}