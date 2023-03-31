<template>
    <form @submit.prevent="createProject">
          <div class="form-control">
            <label for="title">Project Title</label>
            <input type="title" id="title" v-model.trim="title"/>
          </div>
          <div class="form-control">
            <label for="description">description</label>
            <textarea id="description" v-model.trim="description"> </textarea>
          </div>
          <div class="form-control">
            <label for="completed">completed ?</label>
            <!-- < v-model.trim="description"> </textarea> -->
            <input type="radio" name="completed" value="yes" v-model.trim="completed">
            <label for="completed">Yes</label>
            <input type="radio" name="completed" value="no" v-model.trim="completed" checked>
            <label for="completed">No</label>
          </div>
        
          <button>submit</button>
      
        </form>
</template>
<script>
export default{
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