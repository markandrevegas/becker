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
  { id: 2, src: '/gallery/two.jpg', alt: 'Editorial Portrait' },
  { id: 3, src: '/gallery/three.jpg', alt: 'Studio Photography' },
  { id: 4, src: '/gallery/4.jpg', alt: 'On-set Behind the Scenes' }
]
</script>

<template>
  <div class="flex flex-col">
    <div class="gallery-container relative">
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
      <div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
        <h1 class="text-4xl font-display font-bold uppercase">{{ header }}</h1>
        <p class="text-lg font-medium mt-2 max-w-md uppercase">{{ text }}</p>
      </div>
    </div>
    <div class="p-8 flex flex-col gap-4 pt-16 pb-32">
      <p class="text-lg">Deana J. Becker is an accomplished performer whose work reflects a lifetime of dedication to the craft. A veteran of both the stage and commercial industry, her portfolio includes a wide array of guest and recurring roles in top-tier television dramas. She is currently a series regular on the CBS legal drama Matlock.</p>
      <p class="text-lg">
        Deana's versatility extends beyond acting; she is also a sought-after voiceover artist and model. Her dynamic presence and ability to connect with audiences have made her a favorite in commercials and print campaigns alike. In addition to her on-screen work, Deana is a passionate content creator, leveraging digital platforms to share her insights and experiences in the entertainment industry.
      </p>
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