<template>
    <div>

        <div>
            <!-- <div>{{ post.id }}</div> -->
            <div><b>Заголовок:</b> {{ post.title }}</div>
            <div><b>Текст:</b> {{ post.body }}</div>
            <br>
        </div>


        <div>
            <MyButton v-on:click="$emit('remove', post)">Удалить</MyButton>
        </div>
    </div> 
</template>

<script>
// import MyButton from './UI/MyButton.vue';
    export default {
        props:{
            post:{
                type: Object,
                required:true,
            }
        },
        // components:{ MyButton }
    }
</script>

<style  scoped>

</style>