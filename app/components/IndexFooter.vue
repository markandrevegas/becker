<script setup lang="ts">
const text = "Management"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}
const images: GalleryImage[] = [{ id: 3, src: "/assets/gallery/3.webp", alt: "Studio Photography" }]
</script>
<template>
	<div>
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
				<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 md:hidden">
					<h2 class="mt-2 max-w-md text-4xl font-medium uppercase sm:text-4xl md:hidden">{{ text }}</h2>
				</div>
			</div>
		<footer class="flex min-h-72 flex-col gap-8 bg-abyssal px-8 pt-24 pb-32 text-lg md:text-xl text-white">
			
			<div class="md:w-4/5 md:mx-auto text-lg">
				<h2 class="hidden mt-2 mb-8 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">Management</h2>
				<div class="grid grid-cols-2 gap-16 md:grid-cols-3 md:gap-0 ">
					<div class="col-span-2 flex flex-col md:col-span-1">
						<span class="mb-2 block font-semibold text-slate-500 dark:text-yellow-50/50">Evolve Talent Management</span>
						<span>Sandra Berney</span>
						<a href="mailto:Sandra.evolvetalent@gmail.com" class="hover:underline">sandra.evolvetalent@gmail.com</a>
					</div>
					<div class="col-span-2 flex flex-col">
						<span class="mb-2 block font-semibold text-slate-500 dark:text-yellow-50/50">COMM-Henderson Represents Inc. (HRI)</span>
						<span>Michelle Henderson</span>
						<a mailto="mhenderson@hritalent.com" class="hover:underline">mhenderson@hritalent.com</a>
						<span>310-295-077</span>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
