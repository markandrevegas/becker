<script setup lang="ts">
const text = "Featured Videos"
interface GalleryImage {
  id: number | string
  src: string
  alt: string
}

const images: GalleryImage[] = [
  { id: 1, src: '/gallery/7.jpg', alt: 'Editorial Portrait' },
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
        <p class="text-2xl sm:text-4xl font-medium mt-2 max-w-md uppercase">{{ text }}</p>
      </div>
    </div>
    <div class="p-8 sm:px-16 flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-24 pt-16 sm:py-16">
      <div class="content">
        <p>Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk. She also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!</p>
      </div>
      <div class="video-container">
        <div class="video-wrapper">
          <video class="main-video" autoplay muted playsinline src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768508207&amp;Signature=DrpzT2e14MqKmQgK2RGC3tyDB8xaDSjGVDHZ7RjpezoZXpVcUT3oOBQHbtrmn8r23Fb8HUl4oshzaX8NXUSYmJWOj98854UnmRf0wYpYLzoq6x0YzpNEVNE-YjKjhWTk4gmYOZfahUNY0rhso6GFquwmcWEyVNxZG-YDMfF8Imj1ZgVwh8wSVZHyuZ51iGyEv0AnJujsexWdUkwzVfP9tPStt9dI0Ln~niLbTU8lBtZbIm7M-PD6PAuHVJvfrJz5DCpC8Z1AWr5bbYQ87rWaJQiVhCCD~Yf1C6pCfuZAD~rDTPY~AbtpLl9phXpiYtUwlcJmXukEvnXkmVTEjKk7ZQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
        </div>
      </div>
    </div>
    <Spacer></Spacer>
    <div class="p-8 sm:px-16 flex flex-col sm:flex-row sm:flex-row-reverse sm:align-start gap-4 sm:gap-24 pb-32">
      <div class="video-container sm:min-w-64">
        <div class="video-wrapper">
          <video class="main-video" autoplay muted playsinline src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768508207&amp;Signature=DrpzT2e14MqKmQgK2RGC3tyDB8xaDSjGVDHZ7RjpezoZXpVcUT3oOBQHbtrmn8r23Fb8HUl4oshzaX8NXUSYmJWOj98854UnmRf0wYpYLzoq6x0YzpNEVNE-YjKjhWTk4gmYOZfahUNY0rhso6GFquwmcWEyVNxZG-YDMfF8Imj1ZgVwh8wSVZHyuZ51iGyEv0AnJujsexWdUkwzVfP9tPStt9dI0Ln~niLbTU8lBtZbIm7M-PD6PAuHVJvfrJz5DCpC8Z1AWr5bbYQ87rWaJQiVhCCD~Yf1C6pCfuZAD~rDTPY~AbtpLl9phXpiYtUwlcJmXukEvnXkmVTEjKk7ZQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
        </div>
      </div>
    </div>
  </div>
</template>