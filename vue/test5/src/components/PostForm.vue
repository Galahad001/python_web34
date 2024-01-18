<template>
    <form v-on:submit.prevent>
      <h2>Добавление поста</h2>
      <input 
      v-model="post.title" 
      type="text" 
      placeholder="Тема">
      <input 
      v-model="post.body"
      type="text" 
      placeholder="Контент">
      <MyButton v-on:click="createPost">Создать</MyButton>
    </form>
</template>

<script>
    export default {
        data(){
            return{
                post:{
                    title:'',
                    body:''
                }
            }
        },
        methods:{
            createPost(){
                this.post.id = Date.now()
                this.$emit('create', this.post)
                this.post ={
                    title:'',
                    body:''
                }
            }
        },
    }
</script>

<style scoped>

</style>