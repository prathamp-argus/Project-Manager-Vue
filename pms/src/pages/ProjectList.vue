<template>
    <div>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-if="!isLoading">

                <project-item  
                v-for="project in projectList"
                :id="project.id"
                :key="project.id"
                :projectTitle="project.projectTitle"
                :description="project.description"></project-item>
        </ul>
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
                const projects= this.$store.getters['projects/projects']
                return projects
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