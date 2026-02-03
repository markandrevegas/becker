<script setup lang="ts">
	import type { OnePager } from '~/types/contentful'
	const onePager = inject<Ref<OnePager | null>>('onePager')
	const pending = inject<Ref<boolean>>('onePagerPending')
	const error = inject<Ref<any>>('onePagerError')

	const agentsHeader = computed(() => onePager?.value?.agentsHeader)
	// const agentsInfo = computed(() => onePager?.value?.agentsInfo)
	interface GalleryImage {
		id: string
		srcMobile: string
		srcDesktop: string
		alt: string
	}
	const images: GalleryImage[] = [
		{ id: '2',
			srcMobile: "/becker/assets/gallery/7.webp",
			srcDesktop: "/becker/assets/gallery/index.webp",
			alt: "Deana J Becker" },
	]
</script>
<template>
	<div>
		<div class="gallery-container relative">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-1 flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.srcMobile"
						width="1536"
						class="h-screen w-full object-cover md:hidden"
						alt="Deana J Becker"
						loading="lazy"
					/>
					<NuxtImg
						:src="image.srcDesktop"
						width="1536"
						widths="360 430 640 768 1024 1280 1536 1920"
						class="hidden h-screen w-full object-cover md:block"
						format="webp"
						quality="80"
						alt="Deana J Becker"
						loading="eager"
						fetchpriority="high"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 sm:p-16 lg:hidden text-white dark:text-yellow-50/90">
				<h2 class="sm:hidden mt-2 max-w-md text-4xl font-medium sm:text-4xl drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">{{ agentsHeader }}</h2>
			</div>
		</div>
		<footer class="flex min-h-72 flex-col gap-8 bg-abyssal pt-24 pb-32 text-lg md:text-xl text-white dark:text-yellow-50/90">
			
			<div class="px-8">
				<h2 class="hidden sm:flex mt-2 mb-8 max-w-md text-2xl text-3xl font-medium sm:text-4xl">{{agentsHeader}}</h2>
				<div class="w-full flex flex-col sm:grid sm:grid-cols-2 gap-16">
					<div class="sm:col-span-1 flex flex-col">
						<span class="mb-2 block font-semibold text-slate-200 dark:text-yellow-50/50">Evolve Talent Management</span>
						<span>Sandra Berney</span>
						<a href="mailto:Sandra.evolvetalent@gmail.com" class="hover:underline">sandra.evolvetalent@gmail.com</a>
					</div>
					<div class="sm:col-span-1 flex flex-col">
						<span class="mb-2 block font-semibold text-slate-200 dark:text-yellow-50/50">COMM-Henderson Represents Inc. (HRI)</span>
						<span>Michelle Henderson</span>
						<a mailto="mhenderson@hritalent.com" class="hover:underline">mhenderson@hritalent.com</a>
						<span>310-295-077</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
