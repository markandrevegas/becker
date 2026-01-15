<script setup lang="ts">
import { ref } from "vue"
// states
const isOpen = ref(false)
// helpers
function toggleMenu() {
	isOpen.value = !isOpen.value
}
const handleClick = (id: string) => {
	scrollTo(id)
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
		<header
			:class="
				props.isScrolled
					? 'bg-abyssal/40 text-white backdrop-blur-xl'
					: 'text-abyssal backdrop-blur-md dark:text-yellow-50/90'
			"
			class="fixed right-0 top-0 z-40 flex h-[70px] w-full items-center justify-end px-4 transition-colors duration-300"
		>
			<button
				class="text-2xl uppercase tracking-tighter"
				:aria-expanded="isOpen"
				aria-haspopup="true"
				@click="toggleMenu"
			>
				<MenuIcon :is-open="isOpen" />
			</button>
		</header>
		<!-- Drawer overlay -->
		<div v-if="isOpen" class="fixed inset-0 top-[70px] z-40 bg-black/50 backdrop-blur-sm" @click="toggleMenu"></div>
		<nav
			class="fixed right-0 top-[70px] z-50 h-full w-1/2 lg:w-1/5 bg-white text-abyssal transition-transform duration-300 dark:bg-abyssal dark:text-white"
			:class="isOpen ? 'translate-x-0' : 'translate-x-full'"
		>
			<div class="flex h-full flex-col">
				<div class="fixed right-0 top-0 z-10 flex hidden h-[70px] w-full items-center justify-between px-4">
					<ColorModeToggle />
				</div>
				<div class="flex-1 overflow-y-scroll pt-[70px]">
					<ul class="menu px-4">
						<li class="flex justify-start">
							<NuxtLink to="#gallery" @click="handleClick('gallery')"><HouseIcon /></NuxtLink>
						</li>
						<li>
							<NuxtLink to="#intro" @click="handleClick('intro')">Intro</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#bio" @click="handleClick('bio')">Bio and Roles</NuxtLink>
						</li>
						<li>
							<NuxtLink to="#videos" @click="handleClick('videos')">Clips</NuxtLink>
						</li>
					</ul>
					<div class="grid grid-cols-3 px-4 my-8">
						<div>
							<ColorModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
