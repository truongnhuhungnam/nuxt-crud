<template>
    <div class="mt-4">
        <ul
            class="border border-indigo-400 divide-y divide-indigo-400 rounded-sm"
        >
            <li
                v-for="post in posts"
                :key="post.id"
                class="flex justify-between p-4"
            >
                <div class="info">
                    <p class="text-lg">
                        <span class="text-indigo-400">Id:</span> {{ post.id }}
                    </p>
                    <p class="text-lg">
                        <span class="text-indigo-400">Title:</span>
                        {{ post.title }}
                    </p>
                    <p class="text-lg">
                        <span class="text-indigo-400">Author:</span>
                        {{ post.author }}
                    </p>
                </div>
                <div class="action">
                    <button
                        class="rounded-sm bg-green-600 text-white px-2 py-1 w-30 transition hover:bg-green-400"
                    >
                        Edit
                    </button>
                    <button
                        class="rounded-sm bg-red-600 text-white px-2 py-1 w-30 transition hover:bg-red-400"
                    >
                        Delete
                    </button>
                    <nuxt-link
                        class="rounded-sm bg-indigo-600 text-white px-2 py-1 w-30 inline-block transition hover:bg-indigo-400"
                        :to="'posts/' + post.id"
                    >
                        More Detail
                    </nuxt-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'Vuex'
export default {
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
