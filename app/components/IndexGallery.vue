<script setup lang="ts">
import mobileImage from "~/assets/gallery/headshot.webp"
import desktopImage from "~/assets/gallery/index.webp"

defineProps<{
  mainHeader?: string
  desc?: string
}>()

const { data: onePager } = await useOnePager()

</script>

<template>
	<div class="h-[100dvh] w-full overflow-hidden">
		<!-- Mobile -->
		<div class="absolute inset-0 md:hidden">
			<NuxtImg :src="mobileImage" :alt="mainHeader" class="h-screen w-full object-cover object-top" sizes="100vw" width="900" height="1200" />
			<!--<NuxtImg :src="mobileImage" :alt="heroTitle" sizes="100vw" class="h-full w-full object-cover" loading="eager" fetchpriority="high" preload />-->
		</div>

		<!-- Desktop -->
		<div class="absolute inset-0 hidden md:block">
			<NuxtImg :src="desktopImage" :alt="mainHeader" sizes="100vw" class="h-full w-full object-cover" loading="eager" fetchpriority="high" preload />
		</div>

		<!-- Content -->
		<div class="hidden absolute bottom-[20rem] left-0 z-30 px-8 text-white lg:bottom-[32rem]">
			<h1 v-if="mainHeader" class="animate-slide-fade-left font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">
				{{ mainHeader }}
			</h1>

			<p class="font-regular mt-2 max-w-md animate-fade-in text-xl uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] delay-300">
				{{ desc }}
			</p>
		</div>
	</div>
</template>
