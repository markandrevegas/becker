<script setup lang="ts">
const { data: onePager, pending: onePagerPending, error: onePagerError } = await useOnePager()

const HeroTitle = computed(() => onePager.value?.fields.title ?? "")
const HeroDesc = computed(() => onePager.value?.fields.desc ?? "")
const HeroAboutTeaser = computed(() => onePager.value?.fields.aboutTeaser ?? "")

interface GalleryImage {
	id: string
	srcMobile: string
	srcDesktop: string
	alt: string
}

const images: GalleryImage[] = [
	{
		id: "2",
		srcMobile: "/assets/gallery/headshot.webp",
		srcDesktop: "/assets/gallery/index.webp",
		alt: "Deana J Becker"
	}
]
</script>

<template>
	<div class="flex h-screen flex-col">
		<div class="gallery-container relative h-screen">
			<div class="hide-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="(image, index) in images" :key="image.id" class="relative h-full w-full flex-shrink-0 snap-center">
					<NuxtImg :src="image.srcMobile" :alt="`Deana J Becker — ${index + 1}`" width="768" height="1024" sizes="100vw" class="h-screen w-full animate-fade-slide-up object-cover delay-500 md:hidden" :loading="index === 0 ? 'eager' : 'lazy'" :fetchpriority="index === 0 ? 'high' : 'low'" :preload="index === 0" />
					<NuxtImg :src="image.srcDesktop" :alt="`Deana J Becker — ${index + 1}`" width="1536" height="1024" sizes="100vw" class="hidden h-screen w-full animate-fade-slide-up object-cover delay-500 md:block" :loading="index === 0 ? 'eager' : 'lazy'" :fetchpriority="index === 0 ? 'high' : 'low'" :preload="index === 0" />
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="max-w-wrapper relative bottom-[20rem] z-30 px-8 text-white dark:text-yellow-50/90 lg:bottom-[32rem]">
				<h1 class="animate-slide-fade-left font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">
					{{ HeroTitle }}
				</h1>

				<p class="font-regular mt-2 max-w-md animate-fade-in text-xl uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] delay-300">
					{{ HeroDesc }}
				</p>
			</div>
		</div>

		<div class="max-w-wrapper relative hidden">
			<div class="content gap-8 px-8 py-24">
				<p class="sm:!text-2l !text-xl md:!text-3xl md:!leading-loose">
					{{ HeroAboutTeaser }}
				</p>
			</div>
		</div>
	</div>
</template>
