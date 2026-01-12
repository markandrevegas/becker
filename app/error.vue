<script setup lang="ts">
const props = defineProps({
	error: Object
})

// Log it to the browser console so you can see the REAL issue
console.error("Captured Error:", props.error)
</script>

<template>
	<div style="font-family: sans-serif; padding: 2rem">
		<h1>Something went wrong</h1>
		<pre>{{ error }}</pre>
		<button @click="clearError({ redirect: '/' })">Go Home</button>
	</div>
</template>
