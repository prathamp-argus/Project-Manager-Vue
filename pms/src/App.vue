<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "/node_modules/bootstrap/dist/js/bootstrap.js"
import TheHeader from './layout/TheHeader.vue';
export default {
  name: 'PMS',
  components: { TheHeader
}
}
</script>

<style>

</style>
