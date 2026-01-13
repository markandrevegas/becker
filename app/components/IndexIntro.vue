<script setup lang="ts">
import { ref, onMounted } from "vue"

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = false
})
</script>
<template>
  <div>
    <div class="p-8 mt-24">
      <h2 class="text-2xl mb-4">Featuring...</h2>
      <p class="text-lg">Deana J. Becker is an accomplished performer whose work reflects a lifetime of dedication to the craft. A veteran of both the stage and commercial industry, her portfolio includes a wide array of guest and recurring roles in top-tier television dramas. She is currently a series regular on the CBS legal drama Matlock.</p>
    </div>
    <div class="video-container px-8">
      <div class="video-wrapper">
          <video class="main-video" autoplay muted playsinline title="Deana J. Becker" src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768337488&Signature=kPTvJQ84syEbaApt608KNwIcsyhwj-1AXojjBh~mty2GOgeXHVfD7t~KwPIW7-uXIn9p~17HtbibSda-m9J5NTlOt2G-aVXr3X94riRt3XcPHF0UyY7T9o5wyRGBuGyqWs9FbYHe4A~EYqH7d-wxaQGZyCHpBqcmYuxeQK5Hps6B8OJaUzB0q~GuVqJqnfIlspykY~kfHYl9sqgiQIi4VMDM30fQmF19pxclf8LNEklePfJ6As1f1YsXxddMCc55Id7prWYQTSWhEOiv15CGnpsQS4l5yzyXBIOwLuK4YajgeXyWtnlFl7X~YR6Tpvrp1UetVLenO8eR9lZ-lx5MSw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"></video>
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