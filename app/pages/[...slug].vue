<script setup lang="ts">
const event = useRequestEvent()
if (event?.node?.res) {
	event.node.res.statusCode = 404
}

useHead({
	title: "404 - Page Not Found | Deana J Becker",
	meta: [
		{
			name: "description",
			content: "The page you're looking for doesn't exist."
		}
	]
})

const handleGoHome = () => {
	navigateTo("/")
}
</script>

<template>
	<div class="flex min-h-[calc(100vh-70px)] flex-col items-center justify-center px-8 py-24">
		<div class="text-center">
			<h1 class="font-display text-8xl font-bold uppercase text-abyssal dark:text-yellow-50/90 md:text-9xl">404</h1>
			<h2 class="mt-4 text-2xl font-medium uppercase text-abyssal dark:text-yellow-50/90 md:text-3xl">
				Page Not Found
			</h2>
			<p class="mt-6 max-w-md text-lg text-gray-600 dark:text-gray-400 md:text-xl">
				The page you're looking for doesn't exist or has been moved.
			</p>
			<button
				@click="handleGoHome"
				class="mt-8 rounded-md bg-abyssal px-6 py-3 text-white transition-colors hover:bg-abyssal/90 dark:bg-yellow-50/90 dark:text-abyssal dark:hover:bg-yellow-50"
			>
				Go Home
			</button>
		</div>
	</div>
</template>
