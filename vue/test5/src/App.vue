<template>
  <div>
    
    <MyNav></MyNav>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import MyNav from './components/MyNav.vue';
  export default {
    components:{
      MyNav
    }
  }
</script>

<style scoped>

</style>