<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const scrollContainer = ref(null)
const isScrolled = ref(false)
const onScroll = (e) => {
	// Use a threshold that doesn't require "measuring" the whole container
	const top = e.target.scrollTop
	if (top > 70 && !isScrolled.value) isScrolled.value = true
	else if (top <= 70 && isScrolled.value) isScrolled.value = false
}

onMounted(() => {
	if (scrollContainer.value) {
		scrollContainer.value.addEventListener("scroll", onScroll, { passive: true })
	}
})

onBeforeUnmount(() => {
	if (scrollContainer.value) {
		scrollContainer.value.removeEventListener("scroll", onScroll)
	}
})
</script>
<template>
	<div ref="scrollContainer" class="relative flex h-screen flex-col overflow-auto" @scroll.passive="onScroll">
		<MainMenuSidebar :is-scrolled="isScrolled" />
		<!-- Main scroll area -->
		<main class="flex flex-1 flex-col pt-[70px]">
			<slot></slot>
		</main>
	</div>
</template>
