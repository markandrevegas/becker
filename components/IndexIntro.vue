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
.video-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
  background: #000;
  position: relative;
  overflow: hidden;
}

.main-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-credit {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-size: 0.8rem;
  opacity: 0.7;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 8px;
  border-radius: 4px;
}

.loader, .error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  font-family: sans-serif;
}
</style>