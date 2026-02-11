<script setup lang="ts">
import type { OnePager } from "~/types/contentful"
const onePager = inject<Ref<OnePager | null>>("onePager")

if (!onePager) {
	throw new Error("onePager not provided")
}
const IntroHeader = computed(() => onePager.value?.aboutHeader)
const IntroParagraph = computed(() => onePager.value?.aboutParagraph ?? "")

interface GalleryImage {
	id: string
	src: string
	alt: string
}

const images: GalleryImage[] = [{ id: "4", src: "/becker/assets/gallery/5.webp", alt: "On-set Behind the Scenes" }]
</script>
<template>
	<div class="flex flex-col items-start gap-4 sm:flex-row-reverse md:items-center lg:flex-row">
		<div class="gallery-container relative w-full sm:w-1/2">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg :src="image.src" class="h-screen w-full object-cover object-top" :alt="image.alt" />
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div
				class="absolute bottom-0 left-0 right-0 z-30 flex h-72 flex-col justify-end px-8 pb-16 text-white sm:hidden sm:p-16"
			>
				<h2 class="mt-2 max-w-md font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] lg:hidden">
					{{ IntroHeader }}
				</h2>
			</div>
		</div>
		<div class="content px-8 py-24 sm:w-1/2">
			<h2 class="mb-16 mt-2 hidden w-full max-w-md font-display text-display-lg sm:block">{{ IntroHeader }}</h2>
			<p>{{ IntroParagraph }}</p>
		</div>
	</div>
</template>
