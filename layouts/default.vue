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
.page-enter-active,
.page-leave-active {
    transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
    opacity: 0;
}

.layout-enter-active,
.layout-leave-active {
    transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
    opacity: 0;
}

.slide-bottom-enter-active,
.slide-bottom-leave-active {
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
}
.bounce-enter-active {
    transform-origin: top;
    animation: bounce-in 0.8s;
}
.bounce-leave-active {
    transform-origin: top;
    animation: bounce-out 0.5s;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
@keyframes bounce-out {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(0);
    }
}
</style>
