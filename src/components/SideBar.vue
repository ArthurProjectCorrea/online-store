<template>
    <div class="w-48 fixed top-14 h-full left-0 bg-gray-900">
        <!-- <div class="p-2 text-lg text-gray-400 flex justify-end items-center w-full ">
            <font-awesome-icon :icon="['fas', 'xmark']" />
            <font-awesome-icon v-if="false" :icon="['fas', 'bars']" />
        </div>
        <div></div> -->
        <div class="w-full text-center ">
            <RouterLink to="/" class="styleList">
                <font-awesome-icon :icon="['fas', 'user-secret']" />
                Home
            </RouterLink>
            <RouterLink to="/" class="styleList">
                <font-awesome-icon :icon="['fas', 'user-secret']" />
                Home
            </RouterLink>
            <RouterLink to="/" class="styleList">
                <font-awesome-icon :icon="['fas', 'user-secret']" />
                Home
            </RouterLink>
            <RouterLink to="/" class="styleList">
                <font-awesome-icon :icon="['fas', 'user-secret']" />
                Home
            </RouterLink>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.styleList {
    @apply text-lg p-2 pl-4 uppercase gap-2 flex justify-start items-center hover:bg-emerald-500 hover:text-emerald-950 text-gray-400
}
</style>