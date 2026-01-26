<script setup lang="ts">
	const text = "Clips"
	interface GalleryImage {
		id: number | string
		src: string
		alt: string
	}

	interface FilmClip {
		id: number | string
		src: string
		title: string
		desc: string
		url?: string
	}

	const images: GalleryImage[] = [{ id: 1, src: "/assets/gallery/10.webp", alt: "D. Becker" }]

	const filmClips: FilmClip[] = [
		{
			id: 1,
			src: "https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768595813&Signature=X6YBfz2FleNiQEkeV6mnooRSJUgWkbaYTH4Bzy4cbTMKDBZniuKmzJZwUmgu-hNDqM0GpD62-iq4V~Jb39xejVED-KMWPREpQhrLTTNlJnr67qsLTQs9ZEF44t0zmWAEkT4idm1BRfMJ~-2ZlwhASnF9MU3XcJQKCKqKAd0BvUCay4YuJY0QHAPD79lZnWoeBRB3cv3mys-wwQ2-9lL4nvwsAQngfwIu-mami4oI0oO7C52E~8TxW63e2NApylTkj9iGPCBC65SCIBgjRR4nhu6otLBzYBS3RQCLnsZzJsIVE-F~0dz8lj-YfGuNmYZIKr6fK4bYwevchsVWDQ4xqA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
			title: "Deana J Becker Dramatic Reel",
			desc: 'This is my new dramatic acting reel, starting with a scene from the forthcoming film "What Really Matters", directed by William Bright. The second clip comes from the web series Fauk My Life, directed by Stephanie Neroes, which has won official selection to over ten festivals in 2017, and won in HIMPFF and Accolade Global Film Competition. Fauk My Life was also a Semi-Finalist at Los Angeles Cinefest. The final clip is from the DGA Student Film Awards 2014 Jury Award winner, "Diana Leigh", directed by Stephanie Hosten. The film has also screened at numerous film festivals.',
			url: ''
		},
		{
			id: 2,
			src: "https://imdb-video-wab.media-imdb.com/vi414319897/1434659607842-pgv4ql-1750502969372.mp4?Expires=1768987533&Signature=aM2hZwHC27SJcG9AeGJzvdiM4wY~MBynBXcCqbKwi060IXVXj7A5s9EV6K9SWFKCzgxvbMu5fGlwtHH45WtNGbMO6xyUtemSOB3M0~TVdNbqV3QxQNCtPlrtGFR~tZsL4Z1z~sL94aravLc9VAv5hDSPov3S1~1qfO~W0yRVVSOFI5EaaszNZbR9ivMqIwXyacVh7HtShBJHDAe6btTJUlYf-fDq8hjCZD4lJs0uWF5p0MsopFIyhP0GtH0Cyay0sSPbLmDeC3szZ5vmJA6drC87mwT6gzHlI5UV6RXSD3zIpT613uy7MJXt9U-MD-WXT2-zWwrSfPZ3hEkcrFQSog__&Key-Pair-Id=APKAJLOTGGE6P3RA3PTA",
			title: "Don't Go To Strangers",
			desc: "A love-starved bachelor in desperate straights unknowingly picks up a transsexual in a local bar who turns out to be a former welter weight boxer.",
			url: 'https://www.imdb.com/title/tt1466467/?ref_=vp_ov_btn'
		}
	]
</script>
<template>
	<div class="max-w-wrapper flex flex-col md:flex-row gap-4">
		<div class="gallery-container relative">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						width="1920"
						widths="360 430 640 768 1024 1280 1536 1920"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						:alt="image.alt"
					/>
				</div>
			</div>
			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 md:hidden">
				<h2 class="mt-2 max-w-md text-4xl font-medium uppercase sm:text-4xl">{{ text }}</h2>
			</div>
		</div>
		<div class="content">
			<h2 class="hidden md:block mt-2 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">{{ text }}</h2>
			<p>
				Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk.
				She also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The
				Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!
			</p>
			<div class="flex flex-col justify-start py-8 gap-8 w-full">
				<div v-for="clip in filmClips" :key="clip.id" class="video-container">
					<div class="video-wrapper">
						<video
							class="main-video"
							muted
							controls
							playsinline
							:src="clip.src"
						></video>
					</div>
					<div class="mt-8">
						<p class="font-medium">{{ clip.title }}</p>
						<p class="text-gray-600 dark:text-gray-400 mb-4">{{ clip.desc }}</p>
						<a v-if="clip.url" :href="clip.url"><p>IMDB</p></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
