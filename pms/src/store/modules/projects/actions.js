export default {
    async loadProjects(context)
    {    try {
        
        console.log("called")
        const response = await fetch(
            'http://localhost:3000/projects',
            )
            console.log(response)
        // const response = await this.$http.get("http://localhost:3000/projects")
        const responseData = await response.json();
        // if (!response.ok) {
        //     const error = new Error(responseData.message || 'Failed to fetch!');
        //     // throw error;
        // }
        const projects = [];

        for (const key in responseData){
            const project = {
                id : key ,
                projectTitle : responseData[key].name,
                description : responseData[key].description,
                completed : responseData[key].completed
            }
            projects.push(project)
        }
        console.log(projects)
        context.commit('setProjects',projects)
    
    } catch (error) {

        console.log(error)
        
    }
    }
}