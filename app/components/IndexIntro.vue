<script setup lang="ts">
const header = "Intro"
// const text = "SAG AFTRA Actress"
interface GalleryImage {
  id: number | string
  src: string
  alt: string
}

const images: GalleryImage[] = [
  { id: 4, src: '/gallery/4.jpg', alt: 'On-set Behind the Scenes' }
]
</script>
<template>
  <div class="flex flex-col gap-4">
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
      <div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 sm:p-16 text-white">
        <p class="text-2xl sm:text-4xl font-medium mt-2 max-w-md uppercase">{{ header }}</p>
      </div>
    </div>
    <div class="content">
      <p>Originally from Washington D.C., Deana grew up in a multi-cultural household, seventh of her father's nine children. "Coming from a multi-ethnic background has definitely provided me a unique perspective on people and cultures. I use this in my acting and writing all the time", she says. Her training began at Studio Theatre Acting Conservatory and after attending her first audition and booking a one-year tour, Deana headed to American Academy of Dramatic Arts in NYC. While in NYC, Deana appeared in several Off-Broadway shows Including "Harriett Tubman Visits a Therapist", which won the Samuel French Shorts competition. She also began her television and film career in NYC, working on "Law and Order", "The Chris Rock Show" and several others.</p>
    </div>
  </div>
</template>