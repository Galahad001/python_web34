<template>
  <div>

    <form v-on:submit.prevent>
      <h2>Добавление поста</h2>
      <input v-bind:value="title" v-on:input="title = $event.target.value" type="text" placeholder="Тема">
      <input v-bind:value="content" v-on:input="content = $event.target.value" type="text" placeholder="Контент">
      <button v-on:click="createPost">Создать</button>
    </form>

    <div v-for="post in posts">
      <div>{{ post.title }}</div>
      <div>{{ post.content }}</div>
      <br>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        posts:[
          {id:1, title:'JS', content:'Изучаем JS'},
          {id:1, title:'Python', content:'Изучаем Python'},
          {id:1, title:'HTML', content:'Изучаем HTML'},
        ]
      }
    },
    methods:{
      createPost(){
        let newPost={
          id: Date.now(),
          title: this.title,
          content: this.content,
        }
        this.posts.push(newPost)
        this.title = ''
        this.content = ''
      }
    }
    
  }
</script>

<style scoped>

</style>