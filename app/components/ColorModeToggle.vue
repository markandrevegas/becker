<template>
	<ClientOnly>
		<button aria-label="Color Mode Toggle" :class="isDark ? 'bg-transparent text-yellow-50/90' : 'bg-transparent'" @click="toggle">
			<span v-if="isDark">
				<SunIcon />
			</span>
			<span v-else>
				<MoonIcon />
			</span>
		</button>
	</ClientOnly>
	
</template>

<script setup lang="ts">
import { computed } from "vue"

import { useColorMode } from "@vueuse/core"

const colorMode = useColorMode()
const toggle = () => {
	colorMode.value = colorMode.value === "dark" ? "light" : "dark"
	console.log("Color mode set to:", colorMode.value)
}

const isDark = computed(() => colorMode.value === "dark")
</script>
