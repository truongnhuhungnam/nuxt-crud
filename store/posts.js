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
}

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts
    },
}
