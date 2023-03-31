export default {
  setProjects(state, payload) {
    state.projects = payload;
  },
  createProject(state, payload) {
    state.projects.push(payload);
  },
  removeProject(state, payload) {
    const index = state.projects.findIndex(
      (project) => project.id === payload._id
    );
    state.projects.splice(index, 1);
  },
};
