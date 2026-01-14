<script setup lang="ts">
import { ref, onMounted } from "vue"
const header = "Videos"
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
      <div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
        <h2 class="text-2xl font-medium mt-2 max-w-md uppercase">{{ text }}</h2>
      </div>
    </div>
    <div class="p-8">
      <p class="text-lg">Deana J. Becker is an accomplished performer whose work reflects a lifetime of dedication to the craft. A veteran of both the stage and commercial industry, her portfolio includes a wide array of guest and recurring roles in top-tier television dramas. She is currently a series regular on the CBS legal drama Matlock.</p>
    </div>
    <div class="video-container px-8">
      <div class="video-wrapper">
          <video class="main-video" autoplay muted playsinline src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768508207&amp;Signature=DrpzT2e14MqKmQgK2RGC3tyDB8xaDSjGVDHZ7RjpezoZXpVcUT3oOBQHbtrmn8r23Fb8HUl4oshzaX8NXUSYmJWOj98854UnmRf0wYpYLzoq6x0YzpNEVNE-YjKjhWTk4gmYOZfahUNY0rhso6GFquwmcWEyVNxZG-YDMfF8Imj1ZgVwh8wSVZHyuZ51iGyEv0AnJujsexWdUkwzVfP9tPStt9dI0Ln~niLbTU8lBtZbIm7M-PD6PAuHVJvfrJz5DCpC8Z1AWr5bbYQ87rWaJQiVhCCD~Yf1C6pCfuZAD~rDTPY~AbtpLl9phXpiYtUwlcJmXukEvnXkmVTEjKk7ZQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
      </div>
    </div>
    <div class="p-8">
      <p class="text-lg">
        Deana's versatility extends beyond acting; she is also a sought-after voiceover artist and model. Her dynamic presence and ability to connect with audiences have made her a favorite in commercials and print campaigns alike. In addition to her on-screen work, Deana is a passionate content creator, leveraging digital platforms to share her insights and experiences in the entertainment industry.
      </p>
    </div>
    <div class="video-container">
      <div class="video-wrapper">
          <video class="main-video" autoplay muted playsinline title="Deana J. Becker" src="https://imdb-video-wab.media-imdb.com/vi414319897/1434659607842-pgv4ql-1750502969372.mp4?Expires=1768342161&Signature=SSGAZIAV7RcOcGBQNROaIEgGVhl0iZ8KPdF4WsiULgV0nHc31SfcoRhm3cPJiBl2Kpl55-iUoDtcvJfdn-Jp37Bv~lmo7MJT7NKRhqmYO0L7irqrC59P2d8v7v-nP0im2CK5NGhHyP~fVaztzEKy1St6Uf~YVWeNpxywOyX4EcAxf9kD~Vi9cSqb8wgiVB-Qiw4yOQ6FkIvKWePsiqcFw5c4cSLsjWNyjA3qgbtQoc~WFvb3rUKfnYoEc6dO8c7-S3R4Itwtl4v28T~Tvcs9peF-ZW2oxX3P3WciKA-6y-8JGvA2j0bAYmC1GeZodCaL93jfsjXzooo3VFYn0MEYYg__&Key-Pair-Id=APKAJLOTGGE6P3RA3PTA"></video>
      </div>
    </div>
  </div>
</template>