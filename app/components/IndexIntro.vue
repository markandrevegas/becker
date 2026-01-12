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
    <div v-if="isLoading" class="loader">
      Loading Reel...
    </div>

    <div v-else-if="featuredVideo" class="video-wrapper">
			<video :src="featuredVideo.video_url" :poster="featuredVideo.image" autoplay muted loop playsinline class="main-video"></video>
      
      <div class="video-credit">
        Video by {{ featuredVideo.user }}
      </div>
    </div>

    <div v-else class="error">
      Failed to load video.
    </div>
  </div>
</template>

<style scoped>

</style>