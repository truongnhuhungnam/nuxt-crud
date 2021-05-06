<template>
    <div class="flex justify-between p-4">
        <div class="info">
            <p class="text-lg">
                <span class="text-indigo-400">Id:</span> {{ postData.id }}
            </p>
            <p class="text-lg">
                <span class="text-indigo-400">Title:</span>
                {{ postData.title }}
            </p>
            <p class="text-lg">
                <span class="text-indigo-400">Author:</span>
                {{ postData.author }}
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
                :to="'posts/' + postData.id"
            >
                More Detail
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        postData: {
            type: Object,
            default() {
                return {
                    id: '1',
                    title: 'title',
                    author: 'author',
                }
            },
        },
    },
}
</script>
