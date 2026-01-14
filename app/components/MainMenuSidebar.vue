<script setup lang="ts">
import { ref } from "vue"
// states
const isOpen = ref(false)
// helpers
function toggleMenu() {
	isOpen.value = !isOpen.value
}
const scrollTo = (id: string) => {
	const el = document.getElementById(id)
	if (!el) return

	toggleMenu()
	setTimeout(() => {
		el.scrollIntoView({ behavior: "smooth", block: "start" })
	}, 300)
}

const props = defineProps({
	isScrolled: Boolean
})
</script>

<template>
	<div>
		<header :class="props.isScrolled ? 'bg-abyssal/40 text-white backdrop-blur-xl' : 'text-abyssal backdrop-blur-md dark:text-yellow-50/90'" class="fixed right-0 top-0 z-40 flex h-[70px] w-full items-center justify-end px-4 transition-colors duration-300">
			<button class="text-2xl uppercase tracking-tighter" :aria-expanded="isOpen" aria-haspopup="true" @click="toggleMenu"><MenuIcon /></button>
		</header>
		<!-- Drawer overlay -->
		<div v-if="isOpen" class="fixed inset-0 z-40 bg-black/50" @click="toggleMenu"></div>
		<nav class="fixed right-0 top-0 z-50 h-full w-3/4 bg-white text-abyssal dark:bg-abyssal dark:text-white transition-transform duration-300" :class="isOpen ? 'translate-x-0' : 'translate-x-full'">
			<div class="flex h-full flex-col">
				<div class="fixed right-0 top-0 z-10 flex h-[70px] w-full items-center justify-between px-4">
					<ColorModeToggle />
					<CloseIcon @click="toggleMenu" />
				</div>
				<div class="flex-1 overflow-y-scroll pt-[70px]">
					<ul class="menu px-4">
						<li>
							<NuxtLink
								to="#gallery"
								@click.prevent="scrollTo('gallery'); toggleMenu"
								>Home</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#intro" @click.prevent="scrollTo('intro'); toggleMenu"
								>Intro</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#bio" @click.prevent="scrollTo('bio'); toggleMenu"
								>Bio and Roles</NuxtLink
							>
						</li>
						<li>
							<NuxtLink to="#videos" @click.prevent="scrollTo('videos'); toggleMenu"
								>Featured Videos</NuxtLink
							>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
