<template>
  <div>

    <post-form v-on:create="createPost"></post-form>
    <PostList v-bind:posts="posts"></PostList>

  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
  export default {
    components:{
      PostForm,
      PostList,
    },
    data(){
      return{
        posts:[
          {id:1, title:'JS', content:'Изучаем JS'},
          {id:2, title:'Python', content:'Изучаем Python'},
          {id:3, title:'HTML', content:'Изучаем HTML'},
        ]
      }
    },
    methods:{
      createPost(post){
       this.posts.push(post)
      }
    }
    
  }
</script>

<style scoped>

</style>