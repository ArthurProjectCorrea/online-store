<template>
  <div class="styleMain">
    <div>
      <SideBar />
    </div>
    <div>
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
  @apply flex h-screen h-screen bg-gray-200 font-montserrat text-gray-950
}
</style>
