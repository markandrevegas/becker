<script setup lang="ts">
const text = "Clips"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}

const images: GalleryImage[] = [{ id: 1, src: "/gallery/7.jpg", alt: "Editorial Portrait" }]
</script>
<template>
	<div class="flex flex-col md:flex-row gap-4">
		<div class="gallery-container relative">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						:alt="image.alt"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						loading="lazy"
					/>
				</div>
			</div>
			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white sm:p-16">
				<h2 class="mt-2 max-w-md text-6xl font-medium uppercase sm:text-4xl md:hidden">{{ text }}</h2>
			</div>
		</div>
		<div class="content md:w-3/5">
			<h2 class="hidden md:block mt-2 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">{{ text }}</h2>
			<p>
				Deana can be seen in the award winning Web-series, "Fauk My Life", where she plays the role of Mrs. Fauk.
				She also just wrapped the film "What Really Matters", and she was recently awarded a scholarship for The
				Groundlings. Yes, she's funny too! Be on the lookout for much more to come from Deana!
			</p>
			<div class="flex flex-col gap-16 px-8 w-full">
				<div class="video-container">
					<div class="video-wrapper">
						<video
							class="main-video"
							autoplay
							muted
							playsinline
							src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768595813&Signature=X6YBfz2FleNiQEkeV6mnooRSJUgWkbaYTH4Bzy4cbTMKDBZniuKmzJZwUmgu-hNDqM0GpD62-iq4V~Jb39xejVED-KMWPREpQhrLTTNlJnr67qsLTQs9ZEF44t0zmWAEkT4idm1BRfMJ~-2ZlwhASnF9MU3XcJQKCKqKAd0BvUCay4YuJY0QHAPD79lZnWoeBRB3cv3mys-wwQ2-9lL4nvwsAQngfwIu-mami4oI0oO7C52E~8TxW63e2NApylTkj9iGPCBC65SCIBgjRR4nhu6otLBzYBS3RQCLnsZzJsIVE-F~0dz8lj-YfGuNmYZIKr6fK4bYwevchsVWDQ4xqA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
						></video>
					</div>
				</div>
				<Spacer></Spacer>
				<div class="video-container">
					<div class="video-wrapper">
						<video
							class="main-video"
							autoplay
							muted
							playsinline
							src="https://imdb-video.media-imdb.com/vi2536814873/1434659607842-pgv4ql-1501028571775.mp4?Expires=1768595813&Signature=X6YBfz2FleNiQEkeV6mnooRSJUgWkbaYTH4Bzy4cbTMKDBZniuKmzJZwUmgu-hNDqM0GpD62-iq4V~Jb39xejVED-KMWPREpQhrLTTNlJnr67qsLTQs9ZEF44t0zmWAEkT4idm1BRfMJ~-2ZlwhASnF9MU3XcJQKCKqKAd0BvUCay4YuJY0QHAPD79lZnWoeBRB3cv3mys-wwQ2-9lL4nvwsAQngfwIu-mami4oI0oO7C52E~8TxW63e2NApylTkj9iGPCBC65SCIBgjRR4nhu6otLBzYBS3RQCLnsZzJsIVE-F~0dz8lj-YfGuNmYZIKr6fK4bYwevchsVWDQ4xqA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
						></video>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
