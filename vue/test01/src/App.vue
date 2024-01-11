<template>
  <div>
    <div>
      <button v-on:click="like">Лайк</button>
      <button v-on:click="dislike">Дизлайк</button>
    </div>

    <div>Лайки: {{ likes }}</div>
    <div>Дизлайки: {{ dislikes }}</div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
      likes: 0,
      dislikes: 0
      }
    }, 
    methods:{
      like(){
        this.likes += 1
      },
      dislike(){
        this.dislikes += 1
      }

    }
  }
</script>

<style scoped>

</style>