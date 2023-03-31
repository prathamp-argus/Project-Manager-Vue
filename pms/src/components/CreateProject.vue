<template>
    <div class="container mt-5">

        <form @submit.prevent="createProject">
            <div class="form-control mt-2">
                <label for="title" class="form-label">Project Title</label>
            <input type="title" id="title" v-model.trim="title" class="form-control"/>
          </div>
          <div class="form-control mt-2">
              <label for="description" class="form-label">Description of the project</label>
            <textarea id="description" v-model.trim="description" class="form-control"> </textarea>
          </div>
          <div class="form-control mt-2">
            <label for="completed" class="form-label me-5" >Completed ?</label>
            <div class="form-check ">
                <input type="radio" name="completed" value="yes" v-model.trim="completed" class="form-check-input me-2">
                <label for="completed" class="form-check-label">Yes</label>
            </div>
            <div class="form-check ">
                <input type="radio" name="completed" value="no" v-model.trim="completed" checked class="form-check-input me-2">
                <label for="completed" class="form-check-label">No</label>
            </div>
          </div>
        
          <base-button class="mt-3" >submit</base-button>
          
        </form>
    </div>
    </template>
<script>
import BaseButton from '../ui/BaseButton.vue'
export default{
  components: { BaseButton },
    data(){
        return {
            title  : '',
            description : '',
            completed : 'no'
        }
    },
    methods:{
        createProject(){
            if(this.completed==="yes"){
                this.completed=true
            }else{
                this.completed=false
            }
            const formData={
                projectTitle : this.title,
                description : this.description,
                completed :this.completed
            }
            // console.log(formData)
            this.$store.dispatch('projects/createProject',formData)
            this.$router.replace('/projects')
        }
    }
    
}
</script>