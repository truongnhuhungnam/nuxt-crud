<template>
    <div class="w-1/2 mx-auto">
        <h2 class="text-center text-2xl">{{ post.title }}</h2>
        <p class="my-4">{{ post.body }}</p>
        <nuxt-link
            to="/posts"
            class="border-b-2 border-blue-600 hover:opacity-50 transition"
            >Back to list</nuxt-link
        >
    </div>
</template>

<script>
import { mapState } from 'Vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState({
            post: (state) => state.posts.posts,
        }),
    },
    mounted() {
        this.$store.dispatch('posts/getAPost', this.$route.params.id)
    },
}
</script>
