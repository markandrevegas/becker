<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useVideo } from "@/composables/useVideo"
const { getRandomVideo } = useVideo()

const featuredVideo = ref<any>(null)
const isLoading = ref(true)

async function loadHeroVideo() {
  isLoading.value = true
  const { data } = await getRandomVideo()
  
  if (data) {
    featuredVideo.value = data
  }
  isLoading.value = false
}

onMounted(() => {
  loadHeroVideo()
})
</script>
<template>
  <div class="video-container">
    <div class="video-wrapper">
      <video class="main-video" autoplay muted playsinline title="" src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768337488&Signature=kPTvJQ84syEbaApt608KNwIcsyhwj-1AXojjBh~mty2GOgeXHVfD7t~KwPIW7-uXIn9p~17HtbibSda-m9J5NTlOt2G-aVXr3X94riRt3XcPHF0UyY7T9o5wyRGBuGyqWs9FbYHe4A~EYqH7d-wxaQGZyCHpBqcmYuxeQK5Hps6B8OJaUzB0q~GuVqJqnfIlspykY~kfHYl9sqgiQIi4VMDM30fQmF19pxclf8LNEklePfJ6As1f1YsXxddMCc55Id7prWYQTSWhEOiv15CGnpsQS4l5yzyXBIOwLuK4YajgeXyWtnlFl7X~YR6Tpvrp1UetVLenO8eR9lZ-lx5MSw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
    </div>
  </div>
</template>

<style scoped>

</style>