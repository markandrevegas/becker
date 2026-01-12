<script setup>
import { useUnsplash } from "@/composables/useUnsplash"

import { ref, onMounted } from "vue"

// state
const loading = ref(false)
const photo = ref(null)
const contentError = ref(null)
const header = "BECKER"
const text = "FASHION FILM & PHOTOGRAPHY"

const loadPhoto = async () => {
	loading.value = true
	const { getRandomPhoto } = useUnsplash()

	const { data, error: fetchError } = await getRandomPhoto({
		query: "fashion",
		orientation: "portrait"
	})

	loading.value = false

	if (fetchError) {
		contentError.value = fetchError
		return
	}

	photo.value = data
}

onMounted(() => {
	loadPhoto()
})
</script>

<template>
	<div class="flex h-screen flex-1 flex-col bg-red-100">
		<div id="hero" class="relative h-[calc(100vh-70px)]">
			<div v-if="loading">Loading...</div>
			<NuxtImg v-if="photo" :src="photo.urls.full" :alt="photo.alt" class="z-10 h-full w-full object-cover" />
			<div class="absolute inset-0 z-20 bg-black/20"></div>
			<div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
				<h1 class="text-3xl font-medium uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md uppercase">{{ text }}</p>
			</div>
		</div>
		<div id="intro" class="bg-white text-gray-800">
			<IndexIntro />
			<div class="flex h-[100vh] items-center justify-center">
				<p class="text-xl">Scroll down for more...</p>
			</div>
			<p>More content after the filler to ensure scrollability!</p>
			<IndexFooter />
		</div>
	</div>
</template>
<style></style>
