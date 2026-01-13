<script setup lang="ts">
// Define a clear interface for your image objects
interface GalleryImage {
  id: number | string
  src: string
  alt: string
}

const images: GalleryImage[] = [
  { id: 1, src: '/gallery/one.jpg', alt: 'Fashion Film Production' },
  { id: 2, src: '/gallery/two.jpg', alt: 'Editorial Portrait' },
  { id: 3, src: '/gallery/three.jpg', alt: 'Studio Photography' },
  { id: 4, src: '/gallery/4.jpg', alt: 'On-set Behind the Scenes' }
]
</script>

<template>
  <div class="gallery-container">
    <div class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar overflow-y-hidden">
      
      <div 
        v-for="image in images" 
        :key="image.id" 
        class="w-full flex-shrink-0 snap-center relative"
      >
        <NuxtImg 
          :src="image.src" 
          :alt="image.alt"
          class="w-full h-screen object-cover"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
    </div>
    
    <div v-if="images.length === 0" class="mt-4 text-center">
      // NO_IMAGES_FOUND
    </div>
  </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>