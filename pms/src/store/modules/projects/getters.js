export default {
  projects(state) {
    console.log(state);
    return state.projects;
  },
  projectId(state) {
    console.log(state);
    return state.projects.projectId;
  },
  hasProjects(state) {
    return state.projects && state.projects.length > 0;
  },
};
