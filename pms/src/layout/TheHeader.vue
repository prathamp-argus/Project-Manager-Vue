<template>
    <!-- <header>
      <nav>
        <h1>
          <router-link to="/">Projects</router-link>
        </h1>
        <ul>
          <li>
            <router-link to="/projects">All Projects</router-link>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/myprojects">My Projects</router-link>
          </li>
          <li v-else>
            <router-link to="/auth">Login</router-link>
          </li>
          <li v-if="isLoggedIn">
            <base-button @click="logout">Log Out</base-button>
          </li>
        </ul>
      </nav>
    </header> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <router-link to="/" class="navbar-brand" >Project Manager</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/projects" class="nav-link active" aria-current="page" >Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/project/new" class="nav-link" >Create Project</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/auth" class="nav-link" >Login</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/auth" class="nav-link" >Sign-up</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </template>

  <script>
  export default{
    computed: {
    isLoggedIn() {
      // return this.$store.getters.isAuthenticated
      return true
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace('/auth')
    }
  }

  }
  </script>
  