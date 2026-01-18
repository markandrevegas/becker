<script setup lang="ts">
const header = "Deana Becker"
const text = "SAG AFTRA Actress"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [
	{ id: 2,
		src: "/assets/gallery/7.webp",
		alt: "Deana J Becker" },
]
</script>

<template>
	<div class="flex flex-col">
		<div class="gallery-container relative" style="height:100vh">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-1 flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						width="1920"
						widths="360 430 640 768 1024 1280 1536 1920"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						alt="Deana J Becker"
						loading="eager"
						fetchpriority="high"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div
				class="flex flex-col justify-start items-start absolute bottom-0 left-0 right-0 z-30 h-96 p-6 pt-0 text-white sm:p-16 lg:pt-0"
			>
				<h1 class="font-display text-6xl font-bold uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md text-2xl font-medium uppercase">{{ text }}</p>
			</div>
		</div>
		<div class="content md:w-3/5 md:mx-auto md:mt-24">
			<div class="relative mx-auto my-4 flex w-full justify-center hidden md:flex">
				<span class="absolute top-[-1.5rem] z-20 inline-block bg-white dark:bg-abyssal dark:text-yellow-50/90"
					><h2 class="!text-3xl font-medium uppercase sm:text-4xl p-2 px-8">About {{ header }}</h2></span>
				<div class="w-full border-2 border-t border-abyssal border-current"></div>
			</div>
			<p class="text-lg md:text-2xl md:leading-12">
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
