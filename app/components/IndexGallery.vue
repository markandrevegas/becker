<script setup lang="ts">
const header = "Deana Becker"
const text = "SAG AFTRA Actress"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [
	{ id: 2, src: "/gallery/10.jpg", alt: "Nurse" },
	{ id: 4, src: "/gallery/4.jpg", alt: "On-set Behind the Scenes" },
	{ id: 5, src: "/gallery/5.jpg", alt: "On-set Behind the Scenes" },
	{ id: 6, src: "/gallery/1.jpg", alt: "On-set Behind the Scenes" }
]
</script>

<template>
	<div class="flex flex-col md:flex-row md:items-center">
		<div class="gallery-container relative">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						:alt="image.alt"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						loading="lazy"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div
				class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white sm:p-16 md:hidden"
			>
				<h1 class="font-display text-4xl font-bold uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md text-lg font-medium uppercase">{{ text }}</p>
			</div>
		</div>
		<div class="content">
			<div>
				<h1 class="font-display text-4xl font-bold uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md text-lg font-medium uppercase">{{ text }}</p>
			</div>
			<p>
				Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk. She
				also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The
				Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!
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
