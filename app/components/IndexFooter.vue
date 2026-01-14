<script setup lang="ts"></script>
<template>
	<div>
		<footer class="min-h-72 bg-abyssal pt-24 px-8 pb-16 text-white text-sm flex flex-col gap-8">
			<div class="grid grid-cols-2">
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Email</span>
					<a href="mailto:contact@example.com" class="hover:underline">contact@example.com</a>
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Phone</span>
					<a href="tel:+12125551234" class="hover:underline">+1 (212) 555-1234</a>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-8">
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Booking Agency</span>
					<a href="#" class="hover:underline">Elite Talent Management</a>
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Agency Email</span>
					<a href="mailto:bookings@elitetalent.com" class="hover:underline">bookings@elitetalent.com</a>
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Agency Phone</span>
					<a href="tel:+12125559876" class="hover:underline">+1 (212) 555-9876</a>
				</div>
				<div class="flex flex-col">
					<span class="font-bold text-slate-500">Agency Website</span>
					<a href="https://www.elitetalent.com" class="hover:underline" target="_blank" rel="noopener noreferrer">elitetalent.com</a>
				</div>
			</div>
			<div class="flex items-center justify-start gap-4 mt-8">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm3.43 4.136a.75.75 0 0 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 11.585z" clip-rule="evenodd" /></svg>
				<span>Get in touch</span>
			</div>
		</footer>
	</div>
</template>
