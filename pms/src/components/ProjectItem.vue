<template>
    <li>
      <h3>{{ projectTitle }}</h3> 
      <h6>{{ description }}</h6>
      <h6>{{ completed }}</h6>

      
      <div class="actions">
        <base-button link :to="projectDetailsLink">View Project</base-button>
        <base-button link :to="projectDetailsLink">Delete Project</base-button>
        <!-- <router-link :to="projectDetailsLink">View Detail</router-link> -->
      </div>
    </li>
  </template>
  
  <script>
  // import BaseButton from '@/ui/BaseButton.vue';
export default {
  props: ['id','projectTitle','completed','description'],
  // components : {BaseButton},
  
  computed: {
    projectDetailsLink() {
      return this.$route.path + '/' + this.id; 
    },
  },
};
</script>
  
  <style scoped>
  li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  h3,
  h4 {
    margin: 0.5rem 0;
  }
  
  div {
    margin: 0.5rem 0;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
  }
  </style>