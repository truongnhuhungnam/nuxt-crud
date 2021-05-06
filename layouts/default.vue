<template>
    <div class="page-wrapper">
        <div class="flex py-4 border-b-2">
            <div class="container mx-auto">
                <nuxt-link
                    to="/"
                    class="px-4 py-2 border-b-2 border-indigo-100 transition hover:border-indigo-400"
                >
                    Home
                </nuxt-link>
                <nuxt-link
                    to="/posts"
                    class="px-4 py-2 border-b-2 border-indigo-100 transition hover:border-indigo-400"
                >
                    Posts
                </nuxt-link>
            </div>
        </div>
        <div class="w-2/3 mx-auto mt-4">
            <Nuxt />
        </div>
    </div>
</template>
<style>
.nuxt-link-exact-active {
    border-color: rgba(129, 140, 248, var(--tw-border-opacity));
}
</style>
