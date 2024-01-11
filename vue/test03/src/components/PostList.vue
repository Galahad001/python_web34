<template>
    <div v-for="post in posts">
      <div>{{ post.title }}</div>
      <div>{{ post.content }}</div>
      <br>
    </div> 
</template>

<script>
    export default {
        props:{
            posts:{
                type:Array,
                required:true
            }
        }
        
    }
</script>

<style scoped>

</style>