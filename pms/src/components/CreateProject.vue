<template>
    <form @submit.prevent>
          <div class="form-control">
            <label for="title">Project Title</label>
            <input type="title" id="title" v-model.trim="title"/>
          </div>
          <div class="form-control">
            <label for="description">description</label>
            <textarea id="description" v-model.trim="description"> </textarea>
          </div>
        
          <button>submit</button>
      
        </form>
</template>