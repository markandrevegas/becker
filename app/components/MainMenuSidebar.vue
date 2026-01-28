<script setup lang="ts">
import { ref } from "vue"
import LineInstagram from "./LineInstagram.vue"
// states
const isOpen = ref(false)
// helpers
function toggleMenu() {
	isOpen.value = !isOpen.value
}
const handleClick = (id: string, res: string) => {
	scrollTo(id, res)
}
const scrollTo = (id: string, res: string) => {
	const el = document.getElementById(id)
	if (!el) return
	
	if (res === 'mobile') {
		toggleMenu()
	}
	setTimeout(() => {
		el.scrollIntoView({ behavior: "smooth", block: "start" })
	}, 300)
}

const props = defineProps({
	isScrolled: Boolean
})
</script>

<template>
	<div
    class="fixed inset-x-0 top-0 z-40 transition-colors duration-500 ease-in-out"
    :style="{
      '--header-blur': props.isScrolled ? '24px' : '12px',
      '--header-bg': props.isScrolled ? 'rgba(27, 38, 50, 0.4)' : 'transparent'
    }"
    :class="[
      'backdrop-blur-[var(--header-blur)] bg-[var(--header-bg)]',
      props.isScrolled ? 'text-white' : 'text-abyssal dark:text-yellow-50/90'
    ]"
  >
		<header
			class="max-w-wrapper px-8 flex h-[70px] w-full items-center justify-end transition-colors duration-300"
		>
			<nav class="w-full flex justify-between items-center gap-16">
				<ul class="menu-desktop">
					<li class="flex justify-start md:hidden">
						<NuxtLink to="#gallery" @click="handleClick('gallery', 'desktop')"><CircleChevronUpIcon /></NuxtLink>
					</li>
					<li style="margin-left:0;padding-right:4rem;">
						<NuxtLink to="#intro" @click="handleClick('intro', 'desktop')">Intro</NuxtLink>
					</li>
					<li style="margin-left:0;padding-right:4rem;">
						<NuxtLink to="#bio" @click="handleClick('bio', 'desktop')">Bio and Roles</NuxtLink>
					</li>
					<li style="margin-left:0;padding-right:4rem;">
						<NuxtLink to="#videos" @click="handleClick('videos', 'desktop')">Clips</NuxtLink>
					</li>
					<li class="hidden" style="margin-left:0;padding-right:4rem;">
						<NuxtLink to="/features">Features</NuxtLink>
					</li>
				</ul>
				<div class="flex justify-start items-center gap-8">
					<LineFacebook />
					<LineInstagram />
					<ColorModeToggle />
				</div>
			</nav>
			<button
				aria-label="Menu Toggle"
				class="text-2xl uppercase tracking-tighter md:hidden"
				:aria-expanded="isOpen"
				aria-haspopup="true"
				@click="toggleMenu"
			>
				<MenuIcon :is-open="isOpen" />
			</button>
		</header>
		<!-- Drawer overlay -->
		<div v-if="isOpen" aria-label="Menu Toggle" class="fixed inset-0 top-[70px] z-40 bg-black/50 backdrop-blur-sm" @click="toggleMenu"></div>
		<nav
			class="fixed right-0 top-[70px] z-50 min-h-screen w-2/3 lg:w-1/5 text-abyssal bg-white transition-transform duration-300 dark:bg-abyssal dark:text-white"
			:class="isOpen ? 'translate-x-0' : 'translate-x-full'"
		>
			<div class="flex h-full flex-col">
				<div class="fixed right-0 top-0 z-10 flex hidden h-[70px] w-full items-center justify-between px-4">
					<ColorModeToggle />
				</div>
				<div class="flex-1 overflow-y-scroll pt-[70px]">
					<ul class="menu px-4">
						<li class="flex justify-start" @click="handleClick('gallery', 'mobile')">
							<NuxtLink aria-label="Back to Top" to="#gallery"><HouseIcon aria-hidden="true" focusable="false" /></NuxtLink>
						</li>
						<li>
							<NuxtLink aria-label="Intro" to="#intro" @click="handleClick('intro', 'mobile')">Background</NuxtLink>
						</li>
						<li>
							<NuxtLink aria-label="Biography and Roles" to="#bio" @click="handleClick('bio', 'mobile')">Catalog</NuxtLink>
						</li>
						<li>
							<NuxtLink aria-label="Videos" to="#videos" @click="handleClick('videos', 'mobile')">Film and TV</NuxtLink>
						</li>
					</ul>
					<div class="md:hidden px-4 mt-16 flex justify-between items-center">
						<h3 class="flex-1 font-medium text-xl m-0">Follow me</h3>
						<div class="flex justify-start items-center gap-8">
							<LineLinkedin />
							<LineInstagram />
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
