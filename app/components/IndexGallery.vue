<script setup lang="ts">
// Define a clear interface for your image objects
const header = "Deana Becker"
const text = "SAG AFTRA Actress"
interface GalleryImage {
  id: number | string
  src: string
  alt: string
}

const images: GalleryImage[] = [
  { id: 1, src: '/gallery/one.jpg', alt: 'Fashion Film Production' },
  { id: 2, src: '/gallery/5.jpg', alt: 'Editorial Portrait' },
  { id: 3, src: '/gallery/7.jpg', alt: 'Studio Photography' },
  { id: 4, src: '/gallery/4.jpg', alt: 'On-set Behind the Scenes' }
]
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center">
    <div class="gallery-container relative">
      <div class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar overflow-y-hidden">
        <div v-for="image in images" :key="image.id" class="w-full flex-shrink-0 snap-center relative">
          <NuxtImg :src="image.src" :alt="image.alt" class="w-full h-screen object-cover" format="webp" quality="80" loading="lazy" />
        </div>
      </div>
      
      <div v-if="images.length === 0" class="mt-4 text-center">
        // NO_IMAGES_FOUND
      </div>
      <div class="md:hidden flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 sm:p-16 text-white">
        <h1 class="text-4xl font-display font-bold uppercase">{{ header }}</h1>
        <p class="text-lg font-medium mt-2 max-w-md uppercase">{{ text }}</p>
      </div>
    </div>
    <div class="content">
      <div>
        <h1 class="text-4xl font-display font-bold uppercase">{{ header }}</h1>
        <p class="text-lg font-medium mt-2 max-w-md uppercase">{{ text }}</p>
      </div>
      <p>Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk. She also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!</p>
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