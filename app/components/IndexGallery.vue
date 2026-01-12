<script setup lang="ts">
const images = [
  '/gallery/one.jpg',
  '/gallery/two.jpg',
  '/gallery/three.jpg',
  '/gallery/4.jpg'
]
</script>

<template>
	<div class="gallery-container">
		<div class="flex w-full justify-start gap-4 overflow-x-scroll py-4">
			<NuxtImg 
				v-for="(src, index) in images" 
				:key="index" 
				:src="src" 
				alt="Gallery Image"
				class="h-72 w-auto object-cover rounded-lg shadow-md"
				format="webp"
				quality="80"
			/>
		</div>
		
		<div v-if="images.length === 0" class="mt-4 text-center text-gray-500">
			No images found in assets/gallery.
		</div>
	</div>
</template>

<style scoped>
/* Ensure the scrollbar is visible or hidden based on your design */
.overflow-x-scroll {
	scroll-snap-type: x mandatory;
	-webkit-overflow-scrolling: touch;
}
</style>