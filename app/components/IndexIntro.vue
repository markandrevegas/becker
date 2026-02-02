<script setup lang="ts">
	import type { OnePager } from '~/types/contentful'
	const onePager = inject<Ref<OnePager | null>>('onePager')
	const pending = inject<Ref<boolean>>('onePagerPending')
	const error = inject<Ref<any>>('onePagerError')

	if (!onePager) {
		throw new Error('onePager not provided')
	}
	const header = computed(() => onePager.value?.aboutHeader)
	const paragraph = computed(() => onePager.value?.aboutParagraph ?? '')

// const text = "SAG AFTRA Actress"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [{ id: '4', src: "/assets/gallery/5.webp", alt: "On-set Behind the Scenes" }]
</script>
<template>
	<div class="flex flex-col gap-4 lg:flex-row sm:flex-row-reverse items-start md:items-center">
		<div class="gallery-container relative sm:w-1/2">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						sizes="100vw sm:100vw md:100vw"
						class="h-screen w-full object-cover object-top"
						format="webp"
						quality="80"
						:alt="image.alt"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 sm:hidden">
				<h2 class="mt-2 max-w-md text-4xl font-medium sm:text-4xl lg:hidden drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">{{ header }}</h2>
			</div>
		</div>
		<div class="content sm:w-1/2 px-8 py-24">
			<h2 class="hidden sm:block mt-2 mb-16 w-full max-w-md lg:text-lg">{{ header }}</h2>
			<p>{{ paragraph }}</p>
		</div>
	</div>
</template>
