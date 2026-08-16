<script setup lang="ts">
const { data: onePager, pending: onePagerPending, error: onePagerError } = await useOnePager()
const title = computed(() => {
	return onePager.value?.fields.title || "Deana J. Becker"
})
const desc = computed(() => {
	return onePager.value?.fields.desc || "SAG AFTRA Actress"
})

interface GalleryImage {
	id: string
	src: string
	alt: string
}
import gallery1 from "~/assets/gallery/headshot.webp"
import gallery3 from "~/assets/gallery/3.webp"
import gallery4 from "~/assets/gallery/4.webp"
import gallery5 from "~/assets/gallery/5.webp"
const images: GalleryImage[] = [
	{ id: "4", src: gallery1, alt: "On-set Behind the Scenes" },
	{ id: "2", src: gallery3, alt: "On-set Production" },
	{ id: "6", src: gallery4, alt: "Behind the Scenes" },
	{ id: "7", src: gallery5, alt: "On-set Action" }
]
</script>
<template>
	<div class="flex flex-col items-start gap-4 sm:flex-row-reverse md:items-center lg:flex-row">
		<div class="gallery-container relative w-full sm:w-1/2">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg :src="image.src" :alt="image.alt" class="h-screen w-full object-cover object-top" sizes="100vw sm:50vw" width="900" height="1200" />
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="absolute bottom-0 left-0 right-0 z-30 flex h-72 flex-col justify-end px-8 pb-16 text-white sm:hidden sm:p-16">
				<h2 class="mt-2 max-w-md font-display text-display-lg lg:hidden">
					{{ title }}
				</h2>
				<p>{{ desc }}</p>
			</div>
		</div>
		<div class="hidden sm:block content px-8 py-24 sm:w-1/2">
			<h2 class="mb-16 mt-2 hidden w-full max-w-md font-display text-display-lg sm:block">{{ title }}</h2>
			<p>{{ desc }}</p>
		</div>
	</div>
</template>
