<script setup lang="ts">
import { ref } from "vue"
import LineInstagram from "./LineInstagram.vue"

const isOpen = ref(false)

function toggleMenu() {
	isOpen.value = !isOpen.value
}

const handleClick = (id: string, res: string) => {
	scrollTo(id, res)
}

const scrollTo = (id: string, res: string) => {
	if (!import.meta.client) return

	const el = document.getElementById(id)
	if (!el) return

	if (res === "mobile") {
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
			'bg-[var(--header-bg)] backdrop-blur-[var(--header-blur)]',
			props.isScrolled ? 'text-white' : 'text-abyssal dark:text-yellow-50/90'
		]"
	>
		<header class="max-w-wrapper flex h-[70px] w-full items-center justify-end px-8 transition-colors duration-300">
			<nav class="flex w-full items-center justify-between gap-16">
				<ul class="menu-desktop">
					<li style="margin-left: 0; padding-right: 4rem">
						<NuxtLink to="#intro" @click="handleClick('intro', 'desktop')">Intro</NuxtLink>
					</li>
					<li style="margin-left: 0; padding-right: 4rem">
						<NuxtLink to="#bio" @click="handleClick('bio', 'desktop')">Film, TV, Theatre</NuxtLink>
					</li>
					<li style="margin-left: 0; padding-right: 4rem">
						<NuxtLink to="#videos" @click="handleClick('videos', 'desktop')">Reels</NuxtLink>
					</li>
					<li class="hidden" style="margin-left: 0; padding-right: 4rem">
						<NuxtLink to="/features">Features</NuxtLink>
					</li>
				</ul>
				<div class="flex items-center justify-start gap-8">
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
		<div
			v-if="isOpen"
			aria-label="Menu Toggle"
			class="fixed inset-0 top-[70px] z-40 bg-black/50 backdrop-blur-sm"
			@click="toggleMenu"
		></div>
		<nav
			class="fixed right-0 top-[70px] z-50 min-h-screen w-2/3 bg-white text-abyssal transition-transform duration-300 dark:bg-abyssal dark:text-white lg:w-1/5"
			:class="isOpen ? 'translate-x-0' : 'translate-x-full'"
		>
			<div class="flex h-full flex-col">
				<div class="fixed right-0 top-0 z-10 flex hidden h-[70px] w-full items-center justify-between px-4">
					<ColorModeToggle />
				</div>
				<div class="flex-1 overflow-y-scroll pt-[70px]">
					<ul class="menu px-4">
						<li>
							<NuxtLink aria-label="Intro" to="#intro" @click="handleClick('intro', 'mobile')">Intro</NuxtLink>
						</li>
						<li>
							<NuxtLink aria-label="Biography and Roles" to="#bio" @click="handleClick('bio', 'mobile')"
								>Film, TV, Theatre</NuxtLink
							>
						</li>
						<li>
							<NuxtLink aria-label="Videos" to="#videos" @click="handleClick('videos', 'mobile')">Reels</NuxtLink>
						</li>
					</ul>
					<div class="mt-16 flex items-center justify-between px-4 md:hidden">
						<h3 class="m-0 flex-1 text-xl font-medium">Follow me</h3>
						<div class="flex items-center justify-start gap-8">
							<a href="https://www.linkedin.com/in/deana-becker-5630545/" target="_blank">
								<LineLinkedin />
							</a>
							<a href="https://www.instagram.com/deanajbecker/" target="_blank">
								<LineInstagram />
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>
