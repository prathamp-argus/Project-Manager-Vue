export default {
  async createProject(context, payload) {
    try {
      const projectData = {
        name: payload.projectTitle,
        description: payload.description,
        completed: payload.completed,
      };
      const token = context.rootGetters.token;
      // console.log(token)
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
      });

      const responseData = await response.json();
      // console.log('response data',responseData)
      const projects = [];

      for (const key in responseData) {
        const project = {
          id: responseData[key]._id,
          owner: responseData[key].owner,
          description: responseData[key].description,
          projectTitle: responseData[key].name,
          completed: responseData[key].completed,
        };
        projects.push(project);
      }

      context.commit("setProjects", projects);
    } catch (error) {
      console.log(error);
    }
  },

  async loadProjects(context) {
    try {
      const token = context.rootGetters.token;
      const response = await fetch("http://localhost:3000/projects", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response)
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        // throw error;
        console.log(error);
      }
      const projects = [];

      for (const key in responseData) {
        const project = {
          id: responseData[key]._id,
          projectTitle: responseData[key].name,
          description: responseData[key].description,
          completed: responseData[key].completed,
          owner: responseData[key].owner,
        };
        console.log(responseData[key].completed);
        projects.push(project);
      }
      // console.log(projects);
      context.commit("setProjects", projects);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProject(context, payload) {
    try {
      const token = context.rootGetters.token;
      // const id = context.rootGetters.projects.id;
      const id = payload;
      console.log(payload);
      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const responseData = await response.json();
      console.log(responseData);
      context.commit("removeProject", responseData);
    } catch (error) {
      console.log(error);
    }
  },
};
