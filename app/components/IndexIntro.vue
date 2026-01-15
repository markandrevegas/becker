<script setup lang="ts">
const header = "Intro"
// const text = "SAG AFTRA Actress"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [{ id: 4, src: "/gallery/11.jpg", alt: "On-set Behind the Scenes" }]
</script>
<template>
	<div class="flex flex-col gap-4 md:flex-row md:flex-row-reverse">
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
			<div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white sm:p-16 md:hidden">
				<h2 class="mt-2 max-w-md text-6xl font-medium uppercase sm:text-4xl md:hidden">{{ header }}</h2>
			</div>
		</div>
		<div class="content md:w-3/4">
			<h2 class="hidden md:block mt-2 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">{{ header }}</h2>
			<p>
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
