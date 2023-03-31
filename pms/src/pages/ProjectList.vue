<template>
    <div>

        <div v-if="projectList.length>0">
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-if="!isLoading" class="container">
                
                <project-item  
                v-for="project in projectList"
                :id="project.id"
                :key="project.id"
                :projectTitle="project.projectTitle"
                :description="project.description"
                :completed="project.completed"></project-item>
            </ul>
        </div>
    <div v-else class="container text-center mt-5 pt-5">
        <h2>Hey buddy, create some projects and work on it</h2>
        <router-link :to="createProjectPath" class="link-dark">Click here to create some projects</router-link>
    </div>
</div>
    
</template>


<script>
import ProjectItem from '../components/ProjectItem.vue'
export default{
    components:{
        ProjectItem
    },

    data() {
        return{
            isLoading : false,
            error :null
        }
    },
    computed : {

        projectList(){
                return this.$store.getters['projects/projects']
            },
        createProjectPath(){
            return this.$route.path + "/new"
        }
    },
    created(){
        this.loadProjects();

    },
    methods :{
    async loadProjects() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('projects/loadProjects');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },   
    }
}
</script>

<style scoped>
ul{
    list-style: none;
}
</style>