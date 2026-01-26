<script setup lang="ts">
	// import type { OnePagerResponse } from '~/types/onePager'
	const ENTRY_ID = 'tvmagv98WHR9YBjGRhG4k'
	// const { data, pending, error } = await useFetch<ContentfulData>('/api/contentful/' + ENTRY_ID)

	interface ContentfulData {
		fields: {
			title: string
			desc: string
			image: string
			aboutHeader: string
		}
	}

	const entry = ref<ContentfulData | null>(null)
	const pending = ref(true)
	const error = ref<any>(null)

	onMounted(async () => {
		try {
			pending.value = true
			// fetch from your server API endpoint
			entry.value = await $fetch<ContentfulData>('/api/contentful/' + ENTRY_ID)
		} catch (err) {
			error.value = err
			console.error(err)
		} finally {
			pending.value = false
		}

		// debug
		console.log('Contentful entry:', entry.value)
	})

	interface GalleryImage {
		id: number | string
		srcMobile: string
		srcDesktop: string
		alt: string
	}

	const images: GalleryImage[] = [
		{ id: 2,
			srcMobile: "/assets/gallery/7.webp",
			srcDesktop: "/assets/gallery/index.webp",
			alt: "Deana J Becker" },
	]
</script>

<template>
	<div class="flex flex-col">
		<div class="gallery-container relative" style="height:100vh">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-1 flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.srcMobile"
						width="1536"
						widths="360 430 640 768 1024 1280 1536 1920"
						class="h-screen w-full object-cover md:hidden"
						format="webp"
						quality="80"
						alt="Deana J Becker"
						loading="eager"
						fetchpriority="high"
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
			<div v-if="entry"
				class="max-w-wrapper relative bottom-[24rem] z-30 h-72 text-white"
			>
				<h1 class="font-display text-6xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">{{ entry.fields.title }}</h1>
				<p class="mt-2 max-w-md text-2xl font-regular uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">{{ entry.fields.desc }}</p>
			</div>
		</div>
		<div class="content md:w-3/5 md:mx-auto md:mt-24">
			<div class="relative mx-auto my-4 flex w-full justify-center hidden md:flex">
				<span class="absolute top-[-1.5rem] z-20 inline-block bg-white dark:bg-abyssal dark:text-yellow-50/90"
					><h2>{{entry?.fields.aboutHeader}}</h2></span>
				<div class="w-full border-2 border-t border-abyssal border-current"></div>
			</div>
			<p>
				Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk. She
				also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The
				Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!
			</p>
		</div>
	</div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
	display: none;
}
.hide-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
