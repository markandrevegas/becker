<script setup lang="ts">
const { data: onePager, pending: onePagerPending, error: onePagerError } = await useOnePager()

const agentsHeader = computed(() => onePager?.value?.fields.agentsHeader ?? "")
// const agentsInfo = computed(() => onePager?.value?.agentsInfo)
</script>
<template>
	<footer class="mt-auto px-8 pb-24 md:text-xl">
		<div class="px-8">
			<h2 class="mt-2 max-w-md font-display text-display-lg">
				{{ agentsHeader }}
			</h2>
			<div class="mt-16 flex w-full flex-col gap-16 sm:grid sm:grid-cols-2">
				<div class="flex flex-col sm:col-span-1">
					<span class="mb-2 block font-semibold">Evolve Talent Management</span>
					<span>Sandra Berney</span>
					<a href="mailto:Sandra.evolvetalent@gmail.com" class="hover:underline">sandra.evolvetalent@gmail.com</a>
				</div>
				<div class="flex flex-col sm:col-span-1">
					<span class="mb-2 block font-semibold">COMM-Henderson Represents Inc. (HRI)</span>
					<span>Michelle Henderson</span>
					<a mailto="mhenderson@hritalent.com" class="hover:underline">mhenderson@hritalent.com</a>
					<span>310-295-077</span>
				</div>
			</div>
		</div>
	</footer>
</template>
