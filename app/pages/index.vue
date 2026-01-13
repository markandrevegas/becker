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
	<div class="flex h-[100vh] flex-1 flex-col">
		<div id="hero" class="relative h-full">
			<IndexGallery />
			<div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
				<h1 class="text-3xl font-medium uppercase">{{ header }}</h1>
				<p class="mt-2 max-w-md uppercase">{{ text }}</p>
			</div>
		</div>
		<div id="intro">
			<IndexIntro />
		</div>
		<div id="bio">
			<IndexBio />
		</div>
		<IndexFooter />
	</div>
</template>