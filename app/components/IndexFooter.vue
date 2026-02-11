<script setup lang="ts">
import type { OnePager } from "~/types/contentful"
const onePager = inject<Ref<OnePager | null>>("onePager")

const agentsHeader = computed(() => onePager?.value?.agentsHeader ?? "")
// const agentsInfo = computed(() => onePager?.value?.agentsInfo)
interface GalleryImage {
	id: string
	srcMobile: string
	srcDesktop: string
	alt: string
}
const images: GalleryImage[] = [
	{
		id: "2",
		srcMobile: "/becker/assets/gallery/7.webp",
		srcDesktop: "/becker/assets/gallery/index.webp",
		alt: "Deana J Becker"
	}
]
</script>
<template>
	<footer
			class="flex flex-col justify-end items-end mt-auto gap-8 bg-abyssal text-lg text-white dark:text-yellow-50/90 md:text-xl"
		>
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
							class="hidden h-screen w-full object-cover md:block"
							alt="Deana J Becker"
							loading="eager"
							fetchpriority="high"
						/>
					</div>
				</div>

				<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
				<div
					class="absolute right-0 bottom-0 left-0 max-w-wrapper z-30 flex flex-col justify-start px-8 pb-32 text-white dark:text-yellow-50/90"
				>
					<h2 class="mt-2 max-w-md font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">
						{{ agentsHeader }}
					</h2>
					<div class="flex w-full flex-col mt-16 gap-16 sm:grid sm:grid-cols-2">
						<div class="flex flex-col sm:col-span-1">
							<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] mb-2 block font-semibold">Evolve Talent Management</span>
							<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">Sandra Berney</span>
							<a href="mailto:Sandra.evolvetalent@gmail.com" class="hover:underline drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">sandra.evolvetalent@gmail.com</a>
						</div>
						<div class="flex flex-col sm:col-span-1">
							<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] mb-2 block font-semibold"
								>COMM-Henderson Represents Inc. (HRI)</span
							>
							<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">Michelle Henderson</span>
							<a mailto="mhenderson@hritalent.com" class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] hover:underline">mhenderson@hritalent.com</a>
							<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">310-295-077</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
</template>
