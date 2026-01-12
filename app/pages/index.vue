<script setup>
import localHeroImage from '../assets/img/headshot.jpg'
// state
const photo = ref(null)
const header = "Deana J Becker"
const text = "SAG AFTRA Actress | Voiceover Artist | Model | Content Creator"

const loadLocalPhoto = () => {
  photo.value = {
    urls: { full: localHeroImage },
    alt: "Local fashion photography"
  }
}
onMounted(() => {
  loadLocalPhoto()
})

</script>

<template>
	<div class="flex h-screen flex-1 flex-col bg-red-100">
		<div id="hero" class="relative h-[calc(100vh-70px)]">
			<IndexGallery />
			<NuxtImg src="img/headshot.jpg" alt="Deana J. Becker" class="hidden z-10 h-full w-full object-cover" />
			<div class="absolute inset-0 z-20 bg-black/20"></div>
			<div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
				<h1 class="text-3xl font-medium uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md uppercase">{{ text }}</p>
			</div>
		</div>
		<div id="intro" class="bg-white text-gray-800">
			<IndexIntro />
		</div>
		<div id="bio" class="bg-white">
			<IndexBio />
		</div>
		<IndexFooter />
	</div>
</template>