<template>
    <div class="mt-4">
        <div
            class="border border-indigo-400 divide-y divide-indigo-400 rounded-sm"
        >
            <SinglePost
                v-for="post in posts"
                :key="post.id"
                :post-data="post"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'Vuex'
import SinglePost from './SinglePost.vue'
export default {
    components: {
        SinglePost,
    },
    computed: {
        ...mapState({
            posts: (state) => state.posts.posts,
        }),
    },
    mounted() {
        this.$store.dispatch('posts/getPosts')
    },
}
</script>
