<template>
  <div class="flex">
    <nav class="styleNavBar"></nav>
    <SideBar />
    <div class="w-full top-14 left-48 right-0 ">
        <RouterView />
        <LowBar/>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import LowBar from './components/LowBar.vue'
</script>

<style scoped>
.styleNavBar {
  @apply h-14 w-full fixed top-0 left-0 right-0 bg-gray-800 border-b-0
}
</style>
