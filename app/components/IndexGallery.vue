<script setup lang="ts">
const { data: onePager, pending: onePagerPending, error: onePagerError } = await useOnePager()

const HeroTitle = computed(() => onePager.value?.fields.title ?? "")
const HeroDesc = computed(() => onePager.value?.fields.desc ?? "")
/*const HeroAboutTeaser = computed(() => onePager.value?.fields.aboutTeaser ?? "")*/

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
	<div class="relative h-[100dvh] w-full overflow-hidden">
		<!-- Mobile Image -->
		<NuxtImg :src="images[0]?.srcMobile" :alt="`Deana J Becker — ${HeroTitle}`" sizes="100vw" class="absolute inset-0 h-[100dvh] w-full object-cover md:hidden" loading="eager" fetchpriority="high" preload />

		<!-- Desktop Image -->
		<NuxtImg :src="images[0]?.srcDesktop" :alt="`Deana J Becker — ${HeroTitle}`" sizes="100vw" class="absolute inset-0 hidden h-full min-h-full w-full min-w-full max-w-none object-cover md:block" width="1536" height="1024" loading="eager" fetchpriority="high" preload />

		<div class="max-w-wrapper absolute bottom-[8rem] left-0 z-30 px-8 text-white dark:text-yellow-50/90 lg:bottom-[32rem]">
			<h1 class="animate-slide-fade-left font-display text-display-lg">
				{{ HeroTitle }}
			</h1>

			<p class="font-regular mt-2 max-w-md animate-fade-in text-xl uppercase delay-300">
				{{ HeroDesc }}
			</p>
		</div>
	</div>
</template>
