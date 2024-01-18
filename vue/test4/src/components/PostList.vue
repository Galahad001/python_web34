<template>
    <div>
        <h2>Список постов</h2>
        <PostItem v-for="post in posts" v-bind:post="post" v-bind="post.id" v-on:remove="$emit('remove', post)"></PostItem>

    </div>
</template>

<script>
import PostItem from './PostItem.vue';

    export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    components: { PostItem }
}
</script>

<style scoped>

</style>