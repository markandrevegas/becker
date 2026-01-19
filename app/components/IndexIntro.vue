<script setup lang="ts">
const header = "Background"
// const text = "SAG AFTRA Actress"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [{ id: 4, src: "/assets/gallery/5.webp", alt: "On-set Behind the Scenes" }]
</script>
<template>
	<div class="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:flex-row-reverse">
		<div class="gallery-container relative col-span-1">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						width="1920"
						widths="360 430 640 768 1024 1280 1536 1920"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						:alt="image.alt"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 md:hidden">
				<h2 class="mt-2 max-w-md text-4xl font-medium uppercase sm:text-4xl md:hidden">{{ header }}</h2>
			</div>
		</div>
		<div class="content col-span-1">
			<h2 class="hidden mt-2 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">{{ header }}</h2>
			<p class="text-lg leading-8 md:text-2xl md:leading-12">
				Originally from Washington D.C., Deana grew up in a multi-cultural household, seventh of her father's nine
				children. "Coming from a multi-ethnic background has definitely provided me a unique perspective on people and
				cultures. I use this in my acting and writing all the time", she says. Her training began at Studio Theatre
				Acting Conservatory and after attending her first audition and booking a one-year tour, Deana headed to American
				Academy of Dramatic Arts in NYC. While in NYC, Deana appeared in several Off-Broadway shows Including "Harriett
				Tubman Visits a Therapist", which won the Samuel French Shorts competition. She also began her television and
				film career in NYC, working on "Law and Order", "The Chris Rock Show" and several others.
			</p>
		</div>
	</div>
</template>
