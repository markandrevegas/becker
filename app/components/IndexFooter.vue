<script setup lang="ts">
const { data: onePager, pending: onePagerPending, error: onePagerError } = await useOnePager()

const agentsHeader = computed(() => onePager?.value?.fields.agentsHeader ?? "")
// const agentsInfo = computed(() => onePager?.value?.agentsInfo)
</script>
<template>
	<footer class="mt-auto flex flex-col items-end justify-end gap-8 bg-abyssal text-lg text-white dark:text-yellow-50/90 md:text-xl">
		<div>
			<h2 class="mt-2 max-w-md font-display text-display-lg drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">
				{{ agentsHeader }}
			</h2>
			<div class="mt-16 flex w-full flex-col gap-16 sm:grid sm:grid-cols-2">
				<div class="flex flex-col sm:col-span-1">
					<span class="mb-2 block font-semibold drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">Evolve Talent Management</span>
					<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">Sandra Berney</span>
					<a href="mailto:Sandra.evolvetalent@gmail.com" class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] hover:underline">sandra.evolvetalent@gmail.com</a>
				</div>
				<div class="flex flex-col sm:col-span-1">
					<span class="mb-2 block font-semibold drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">COMM-Henderson Represents Inc. (HRI)</span>
					<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">Michelle Henderson</span>
					<a mailto="mhenderson@hritalent.com" class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)] hover:underline">mhenderson@hritalent.com</a>
					<span class="drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">310-295-077</span>
				</div>
			</div>
		</div>
	</footer>
</template>
