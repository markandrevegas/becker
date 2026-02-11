<template>
	<div
		class="hover:bg-accent flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200"
		@mouseenter="mouseEnterHandler"
		@mouseleave="mouseLeaveHandler"
		role="button"
		aria-label="Toggle Chevron"
		tabindex="0"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="28"
			height="28"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<Motion is="path" ref="target" d="m8 14 4-4 4 4" />
		</svg>
	</div>
</template>

<script>
export default {
	name: "CircleChevronUpIcon"
}
</script>

<script setup>
import { ref } from "vue"
import { MotionComponent as Motion, useMotion } from "@vueuse/motion"

const defaultTransition = {
	transtion: {
		times: [0, 0.4, 1],
		duration: 500
	}
}

const variants = {
	normal: { y: 0 },
	animate: {
		y: [0, -2, 0]
	}
}

const target = ref()
const targetInstance = useMotion(target, {
	initial: variants.normal,
	enter: variants.normal
})

const applyAnimation = (type) => {
	const variant = variants[type]
	targetInstance.apply({
		...variant,
		...defaultTransition
	})
}

function mouseEnterHandler() {
	applyAnimation("animate")
}

function mouseLeaveHandler() {
	applyAnimation("normal")
}
</script>
