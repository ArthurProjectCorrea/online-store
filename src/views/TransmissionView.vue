<template>
    <div class="styleMain">
        <div class="styleTitle">
            <h1 class="styleTitleH1">Transmissions</h1>
            <button class="styleButtonCreate"><font-awesome-icon :icon="['fas', 'plus']" /></button>
        </div>
        <div class="styleBody">
            <TableCustom/>
        </div>
    </div>
</template>
<script setup>
import TableCustom from '../components/TableCustom.vue'
</script>
<style scoped>
.styleMain {
    @apply  flex-col gap-2 
}
.styleTitle{
    @apply flex justify-between items-center p-2
}
.styleTitleH1{
    @apply text-2xl font-bold
}
.styleBody {
    @apply bg-gray-50 rounded-lg p-2 mx-2
}
</style>