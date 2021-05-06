/* eslint-disable no-console */
export const state = () => ({
    posts: [],
})

export const getters = {
    posts: (state) => {
        return state.posts
    },
}

export const actions = {
    async getPosts({ commit }) {
        try {
            const posts = await this.$axios.$get('/posts')
            commit('SET_POSTS', posts)
        } catch (error) {
            console.log(error)
        }
    },

    async getAPost({ commit }, postId) {
        try {
            const post = await this.$axios.$get(`/posts/${postId}`)
            commit('SET_POSTS', post)
        } catch (error) {
            console.log(error)
        }
    },

    async deleteAPost({ commit }, postId) {
        try {
            await this.$axios.$delete(`/posts/${postId}`)
            commit('DELETE_POST', postId)
        } catch (error) {
            console.log(error)
        }
    },
}

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },

    DELETE_POST(state, postId) {
        state.posts = state.posts.filter((post) => post.id !== postId)
    },
}
