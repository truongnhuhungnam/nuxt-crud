<template>
    <div>
        {{ post.id }}
        {{ post.title }}
        {{ post.author }}
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
