<template>
    <div class="mt-4">
        <button
            class="rounded-sm bg-green-500 text-white px-2 py-1 w-30 transition hover:bg-green-300"
            @click="openModal"
        >
            Add A Post
        </button>

        <PostAddForm ref="addModal" />

        <div
            class="mt-4 border border-indigo-400 divide-y divide-indigo-400 rounded-sm"
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
    methods: {
        openModal() {
            this.$refs.addModal.openChildModal()
        },
    },
}
</script>
