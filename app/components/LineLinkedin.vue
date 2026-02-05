<template>
	<svg
		ref="icon"
		@mouseenter="playAnimation"
		class="hover:cursor-pointer"
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
	>
		<!-- Dot over the i -->
		<circle cx="4" cy="4" r="2" fill="currentColor" fill-opacity="0"></circle>

		<!-- Line paths -->
		<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
			<path d="M4 10v10" stroke-dasharray="12" stroke-dashoffset="12" />
			<path d="M10 10v10" stroke-dasharray="12" stroke-dashoffset="12" />
			<path d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5" stroke-dasharray="24" stroke-dashoffset="24" />
		</g>
	</svg>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const icon = ref<SVGSVGElement | null>(null)

function animatePaths() {
	if (!icon.value) return

	const paths = icon.value.querySelectorAll<SVGPathElement>("path")
	paths.forEach((p, i) => {
		const dashOffset = p.getTotalLength()
		p.style.transition = "none"
		p.style.strokeDashoffset = `${dashOffset}`

		void p.getBoundingClientRect() // force reflow

		p.style.transition = `stroke-dashoffset 0.2s ease ${0.15 + i * 0.3}s`
		p.style.strokeDashoffset = "0"
	})

	const circle = icon.value.querySelector<SVGCircleElement>("circle")
	if (circle) {
		circle.style.transition = "fill-opacity 0.15s ease"
		circle.style.fillOpacity = "1"
	}
}

function playAnimation() {
	animatePaths()
}

onMounted(() => {
	animatePaths()
})
</script>
