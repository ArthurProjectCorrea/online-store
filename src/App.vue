<template>
  <div class="styleMain">
    <div>
      <SideBar />
    </div>
    <div class="w-full">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'

</script>

<style scoped>
.styleMain{
  @apply flex bg-gray-200 font-montserrat text-gray-950 w-full h-screen
}
</style>
