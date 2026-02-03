<script setup lang="ts">
	import type { OnePager } from '~/types/contentful'
	const onePager = inject<Ref<OnePager | null>>('onePager')

	const content = computed(() => onePager?.value?.aboutTeaser)
	const header = computed(() => onePager?.value?.videoHeader)

	if (!onePager) {
		throw new Error('onePager not provided')
	}
	interface GalleryImage {
		id: string
		src: string
		alt: string
	}

	interface FilmClip {
		id: string
		videoId: number | string
		title: string
		desc: string
		url?: string
	}

	const images: GalleryImage[] = [{ id: '1', src: "/assets/gallery/10.webp", alt: "D. Becker" }]

	const filmClips: FilmClip[] = [
		{
			id: '1',
			videoId: 'vi2536814873',
			title: "Deana J Becker Dramatic Reel",
			desc: 'This is my new dramatic acting reel, starting with a scene from the forthcoming film "What Really Matters", directed by William Bright. The second clip comes from the web series Fauk My Life, directed by Stephanie Neroes, which has won official selection to over ten festivals in 2017, and won in HIMPFF and Accolade Global Film Competition. Fauk My Life was also a Semi-Finalist at Los Angeles Cinefest. The final clip is from the DGA Student Film Awards 2014 Jury Award winner, "Diana Leigh", directed by Stephanie Hosten. The film has also screened at numerous film festivals.',
			url: ''
		},
		{
			id: '2',
			videoId: 'vi414319897', // https://www.imdb.com/video/vi414319897/?ref_=vp_rv_vi_1
			title: "Don't Go To Strangers",
			desc: "A love-starved bachelor in desperate straights unknowingly picks up a transsexual in a local bar who turns out to be a former welter weight boxer.",
			url: 'https://www.imdb.com/title/tt1466467/?ref_=vp_ov_btn'
		}
	]
</script>
<template>
	<div class="w-full flex flex-col">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center">
			<div class="gallery-container relative w-full">
				<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
					<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
						<NuxtImg
							:src="image.src"
							class="h-screen w-full object-cover object-top"
							:alt="image.alt"
						/>
					</div>
				</div>
				<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
				<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 sm:hidden">
					<h2 class="mt-2 max-w-md text-4xl font-medium sm:text-4xl drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">{{ header }}</h2>
				</div>
			</div>
			<div class="content px-8 py-24">
				<h2 class="hidden sm:block mt-2 mb-8 w-full max-w-md text-xl">{{ header }}</h2>
				<p>
					{{ content }}
				</p>
				<div class="w-full flex flex-col gap-4 sm:flex-row my-8 lg:my-16">
					<div v-for="clip in filmClips" :key="clip.id" class="video-container">
						<div class="video-wrapper">
							<iframe
								:title="clip.title"
								:src="'https://www.imdb.com/video/imdb/' + clip.videoId + '/imdb/embed'"
								width="640"
								height="360"
								frameborder="0"
								allowfullscreen
								loading="lazy"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
