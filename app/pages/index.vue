<script setup lang="ts">
import { useInViewport } from '~/composables/useInViewport'
const introRef = ref<HTMLElement | null>(null)
const videoRef = ref<HTMLElement | null>(null)
const bioRef = ref<HTMLElement | null>(null)

const { isVisible: isIntroVisible } = useInViewport(introRef)
const { isVisible: isVideoVisible } = useInViewport(videoRef)
const { isVisible: isBioVisible } = useInViewport(bioRef)

const { data: onePager, status, error } = await useOnePager()
provide('onePager', onePager)
provide('onePagerPending', status.value)
provide('onePagerError', error.value)
console.log(onePager.value)
const mapped = computed(() => {
  const entry = onePager.value
  if (!entry) return null

  return {
    title: entry.fields.title,
    desc: entry.fields.desc,
    aboutTeaser: entry.fields.aboutTeaser,
		aboutHeader: entry.fields.aboutHeader,
		aboutParagraph: entry.fields.aboutParagraph,
		videoHeader: entry.fields.videoHeader,
		bioHeader: entry.fields.bioHeader,
		bioParagraph: entry.fields.bioParagraph,
		agentsHeader: entry.fields.agentsHeader
  }
})

provide('onePager', mapped)


import localHeroImage from "/assets/gallery/headshot.webp"
const photo = ref<{ urls: { full: string }, alt: string } | null>(null)

const loadLocalPhoto = () => {
	photo.value = {
		urls: { full: localHeroImage },
		alt: "Deana J. Becker"
	}
}

useHead({
	title: "Deana J Becker - SAG AFTRA Actress",
	meta: [
		{
			name: "title",
			content: "Deana J Becker - SAG AFTRA Actress"
		},
		{
			name: "description",
			content: "Professional acting portfolio, credits, and media for SAG AFTRA actress Deana J Becker."
		},
		{
			property: "og:title",
			content: "Deana J Becker - SAG AFTRA Actress"
		},
		{
			property: "og:description",
			content: "Professional acting portfolio, credits, and media for SAG AFTRA actress Deana J Becker."
		}
	]
})

useSchemaOrg([
	defineWebPage({
		name: "Official Website of Deana Becker",
		description: "Professional acting portfolio, credits, and media."
	}),
	definePerson({
		name: "Deana J. Becker",
		jobTitle: "Actress",
		description: "BFA in Theatre from the University of Minnesota. Experienced in television, film, and voiceover.",
		// Linking her education
		alumniOf: {
			type: "CollegeOrUniversity",
			name: "University of Minnesota"
		},
		// Categorizing her credits for the Knowledge Graph
		knowsAbout: ["Theater Acting", "Cinema", "Television Acting", "Voiceover"],
		// The structured list of her actual work
		mainEntityOfPage: [
			{
				"@type": "ItemList",
				name: "Theater Credits",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "A Midsummer Night's Dream (Hermia)" },
					{ "@type": "ListItem", position: 2, name: "The Glass Menagerie (Laura Wingfield)" },
					{ "@type": "ListItem", position: 3, name: "Death of a Salesman (Linda Loman)" }
				]
			},
			{
				"@type": "ItemList",
				name: "Television Credits",
				itemListElement: [
					{ "@type": "ListItem", position: 1, name: "Grey's Anatomy - S12E08 (Nurse)" },
					{ "@type": "ListItem", position: 2, name: "NCIS - S14E05 (Forensic Technician)" },
					{ "@type": "ListItem", position: 3, name: "The Office - S9E12 (Office Worker)" }
				]
			}
		],
		sameAs: ["https://www.imdb.com/name/nm1125257/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_deana%2520becker"]
	}),
	defineVideo({
		name: "Deana J Becker Dramatic Reel",
		description:
			"A compilation of dramatic performances showcasing Deana J Becker's range and talent as a SAG AFTRA actress.",
		thumbnailUrl: "/video-thumb.jpg",
		contentUrl:
			"https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768508207&amp;Signature=DrpzT2e14MqKmQgK2RGC3tyDB8xaDSjGVDHZ7RjpezoZXpVcUT3oOBQHbtrmn8r23Fb8HUl4oshzaX8NXUSYmJWOj98854UnmRf0wYpYLzoq6x0YzpNEVNE-YjKjhWTk4gmYOZfahUNY0rhso6GFquwmcWEyVNxZG-YDMfF8Imj1ZgVwh8wSVZHyuZ51iGyEv0AnJujsexWdUkwzVfP9tPStt9dI0Ln~niLbTU8lBtZbIm7M-PD6PAuHVJvfrJz5DCpC8Z1AWr5bbYQ87rWaJQiVhCCD~Yf1C6pCfuZAD~rDTPY~AbtpLl9phXpiYtUwlcJmXukEvnXkmVTEjKk7ZQ__&amp;Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
	})
])
onMounted(() => {
	loadLocalPhoto()
})
</script>

<template>
	<div class="h-[100vh]">
		<div class="mx-auto flex flex-1 flex-col">
			<div v-if="onePager" id="gallery" class="md:pb-16">
				<IndexGallery />
			</div>
			<div v-if="onePager" id="intro" ref="introRef"
    :class="['md:pb-16 md:px-24 transition-opacity duration-1000 delay-500', isIntroVisible ? 'animate-fade-slide-up' : 'opacity-0']">
				<IndexIntro />
			</div>
			<div v-if="onePager" id="videos" ref="videoRef" :class="['md:pb-16 md:px-24 transition-opacity duration-1000 delay-500', isVideoVisible ? 'animate-slide-fade-right' : 'opacity-0']">
				<IndexVideos />
			</div>
			<div v-if="onePager" id="bio" ref="bioRef" :class="['md:pb-16 md:px-24 transition-opacity duration-1000 delay-500', isBioVisible ? 'animate-slide-fade-left' : 'opacity-0']">
				<IndexBio />
			</div>
		</div>
		<IndexFooter />
	</div>
</template>
