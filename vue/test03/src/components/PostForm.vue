<template>
    <form v-on:submit.prevent>
      <h2>Добавление поста</h2>
      <input 
      v-model="post.title" 
      type="text" 
      placeholder="Тема">
      <input 
      v-model="post.content"
      type="text" 
      placeholder="Контент">
      <button v-on:click="createPost">Создать</button>
    </form>
</template>

<script>
    export default {
        data(){
            return{
                post:{
                    title:'',
                    content:''
                }
            }
        },
        methods:{
            createPost(){
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post ={
                    title:'',
                    content:''
                }
            }
        }
    }
</script>

<style scoped>

</style>