<template>
    <div class="flex justify-between p-4">
        <div class="info w-2/3">
            <p class="text-lg">
                <span class="text-indigo-400">Id:</span> {{ postData.id }}
            </p>
            <p class="text-lg">
                <span class="text-indigo-400">Title:</span>
                {{ postData.title }}
            </p>
            <p class="text-lg">
                <span class="text-indigo-400">Body:</span>
                {{ postData.body }}
            </p>
        </div>
        <div class="action">
            <button
                class="rounded-sm bg-blue-600 text-white px-2 py-1 w-30 transition hover:bg-blue-400"
            >
                Edit
            </button>
            <button
                class="rounded-sm bg-red-600 text-white px-2 py-1 w-30 transition hover:bg-red-400"
                @click="deleted(postData.id)"
            >
                Delete
            </button>
            <nuxt-link
                class="rounded-sm bg-yellow-600 text-white px-2 py-1 w-30 inline-block transition hover:bg-yellow-400"
                :to="'posts/' + postData.id"
            >
                More Detail
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'Vuex'
export default {
    props: {
        postData: {
            type: Object,
            default() {
                return {
                    id: '1',
                    title: 'title',
                    body: 'body',
                }
            },
        },
    },
    methods: {
        ...mapActions({
            deleteAPost: 'posts/deleteAPost',
        }),
        deleted(PostId) {
            this.deleteAPost(PostId)
            this.$toasted.error('Delete Post Successed!', {
                duration: 4000,
            })
        },
    },
}
</script>
