<script setup>
import localHeroImage from '../assets/img/headshot.jpg'
// state
const photo = ref(null)
const header = "Deana J Becker"
const text = "SAG AFTRA Actress"

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
		<div id="gallery" class="relative h-full">
			<IndexGallery />
		</div>
		<div id="intro">
			<IndexIntro />
		</div>
		<div id="videos">
			<IndexVideos />
		</div>
		<div id="bio">
			<IndexBio />
		</div>
		<IndexFooter />
	</div>
</template>