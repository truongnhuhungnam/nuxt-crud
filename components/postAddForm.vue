<template>
    <sweet-modal ref="addModal">
        <form @submit.prevent="onSubmit">
            <div class="formField flex mb-4">
                <p class="w-1/5 text-left">Title:</p>
                <input
                    v-model="title"
                    type="text"
                    class="px-4 py-2 rounded border border-indigo-400 w-4/5"
                    placeholder="Add a title"
                />
            </div>
            <div class="formField flex mb-4">
                <p class="w-1/5 text-left">Body:</p>
                <textarea
                    v-model="body"
                    rows="5"
                    class="px-4 py-2 rounded border border-indigo-400 w-4/5"
                    placeholder="Add a body"
                ></textarea>
            </div>
            <div class="formField flex">
                <div class="w-1/5"></div>
                <div class="w-4/5 text-left">
                    <button
                        class="rounded-sm bg-indigo-600 text-white px-2 py-1 w-1/3 transition hover:bg-indigo-400"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    </sweet-modal>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import { mapActions } from 'vuex'
import { uuid } from 'vue-uuid'
export default {
    components: {
        SweetModal,
    },
    data() {
        return {
            title: '',
            body: '',
        }
    },
    methods: {
        ...mapActions({
            addPost: 'posts/addPost',
        }),
        onSubmit() {
            this.addPost({
                userId: uuid.v4(),
                id: uuid.v4(),
                title: this.title,
                body: this.body,
            })
        },
    },
}
</script>
