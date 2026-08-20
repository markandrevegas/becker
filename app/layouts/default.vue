<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const scrollContainer = ref(null)
const isScrolled = ref(false)
const onScroll = (e) => {
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
	<div>
		<div ref="scrollContainer" class="relative flex h-[100dvh] w-full flex-col overflow-auto" @scroll.passive="onScroll">
			<MainMenuSidebar :is-scrolled="isScrolled" />
			<!-- Main scroll area -->
			<div class="relative flex w-full flex-1 flex-col pt-[70px]">
				<slot></slot>
			</div>
		</div>
		<IndexFooter />
	</div>
</template>
