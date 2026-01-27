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

const images: GalleryImage[] = [{ id: 4, src: "/assets/gallery/5.webp", alt: "On-set Behind the Scenes" }]
</script>
<template>
	<div class="flex flex-col gap-4">
		<div class="gallery-container relative lg:col-span-1">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						width="1920"
						widths="360 430 640 768 820 1024 1280 1536 1920"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						:alt="image.alt"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 lg:hidden">
				<h2 class="mt-2 max-w-md text-4xl font-medium sm:text-4xl lg:hidden drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">{{ header }}</h2>
			</div>
		</div>
		<div class="content lg:col-span-1 px-16 py-24">
			<h2 class="hidden lg:block mt-2 mb-16 w-full max-w-md text-xl">{{ header }}</h2>
			<p>{{ paragraph }}</p>
		</div>
	</div>
</template>
