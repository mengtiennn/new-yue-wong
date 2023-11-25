<script setup>
import { onMounted, reactive, computed, ref, onUnmounted } from 'vue'
// import { RouterView } from 'vue-router'
// // import { useUpload } from '@/stores/upload'
// import dayjs from 'dayjs'
// import { all } from 'axios'
// const useUploadStore = useUpload()
// const setTime = ref(15)
// const nowP = ref(100)
const props = defineProps({
  sortList: {
    type: Array,
    default: []
  }
})
</script>
<template>
  <div class="flex gap-3 overflow-x-scroll">
    <div v-for="(item, idx) in props.sortList" :key="idx" class="bg-orange-700 rounded-lg px-[10px] py-[6px] text-white text-sm whitespace-nowrap">
      {{ item.name }}
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
