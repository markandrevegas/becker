<script setup lang="ts">
import type { OnePager } from "~/types/contentful"
const onePager = inject<Ref<OnePager | null>>("onePager")

if (!onePager) {
	throw new Error("onePager not provided")
}

const HeroTitle = computed(() => onePager.value?.title ?? "")
const HeroDesc = computed(() => onePager.value?.desc ?? "")
const HeroAboutTeaser = computed(() => onePager.value?.aboutTeaser ?? "")

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
	<div class="flex flex-col">
		<div class="gallery-container relative" style="height: 100vh">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-1 flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.srcMobile"
						class="h-screen w-full animate-fade-slide-up object-cover delay-500 md:hidden"
						alt="Deana J Becker"
						loading="eager"
						fetchpriority="high"
					/>
					<NuxtImg
						:src="image.srcDesktop"
						width="1536"
						class="hidden h-screen w-full animate-fade-slide-up object-cover delay-500 md:block"
						alt="Deana J Becker"
						loading="eager"
						fetchpriority="high"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="max-w-wrapper relative bottom-[20rem] z-30 px-8 text-white dark:text-yellow-50/90 lg:bottom-[32rem]">
				<h1 class="animate-slide-fade-left font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">
					{{ HeroTitle }}
				</h1>
				<p
					class="font-regular mt-2 max-w-md animate-fade-in text-xl uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] delay-300"
				>
					{{ HeroDesc }}
				</p>
			</div>
		</div>
		<div class="max-w-wrapper">
			<div class="content gap-8 px-8 py-24">
				<p class="sm:!text-2l !text-xl md:!text-3xl md:!leading-loose">
					{{ HeroAboutTeaser }}
				</p>
			</div>
		</div>
	</div>
</template>
