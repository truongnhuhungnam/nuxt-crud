<template>
    <div class="mt-4">
        <button
            class="rounded-sm bg-yellow-500 text-white px-2 py-1 w-30 transition hover:bg-yellow-300"
            @click="openAddModal"
        >
            Add A Post
        </button>
        <sweet-modal ref="addModal"> This is a success! </sweet-modal>
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
import { SweetModal } from 'sweet-modal-vue'
import SinglePost from './SinglePost.vue'
export default {
    components: {
        SweetModal,
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
        openAddModal() {
            this.$refs.addModal.open()
        },
    },
}
</script>
