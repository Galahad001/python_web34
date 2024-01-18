<template>
    <div>
  
      <post-form v-on:create="createPost"></post-form>
      <PostList v-bind:posts="posts" v-on:remove="removePost"></PostList>
  
  
      <!-- <button v-on:click="fetchPost">GET</button> -->
  
      <div v-for="page in limit" class="pag">
        <button v-on:click="test(page)">{{ page }}</button>
      </div>
    </div>
  
  
  </template>
  
  <script>
  import PostForm from '../src/components/PostForm.vue'
  import PostList from '../src/components/PostList.vue'
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
          ],
          page_g:1,
          limit:10
        }
      },
      methods:{
        createPost(post){
         this.posts.push(post)
        },
        removePost(post){
          this.posts = this.posts.filter(p => p.id !== post.id)
        },
        async fetchPost(){
          try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${this.page_g}`)
            const data = await response.json()
            this.posts = data
            // console.log(data)
          }catch(e){
            alert("ERROR!")
          }
        },
  
        test(page){
          this.page_g = page
          this.fetchPost()
        }
      },
      mounted(){
        this.fetchPost()
      }
      
    }
  </script>
  
  <style scoped>
  .pag{
    display: inline-block;
  }
  </style>