<script setup lang="ts">
	import type { OnePager } from '~/types/contentful'
	const onePager = inject<Ref<OnePager | null>>('onePager')

	const BioHeader = computed(() => onePager?.value?.bioHeader)
	const BioParagraph = computed(() => onePager?.value?.bioParagraph)
	interface GalleryImage {
		id: string
		src: string
		alt: string
	}
	const images: GalleryImage[] = [{ id: '3', src: "/becker/assets/gallery/1.webp", alt: "Studio Photography" }]

	interface TVRole {
		show: string
		role?: string
		type?: string
		producer?: string
	}

	const tvRoles: TVRole[] = [
		{ show: "Quarter", role: "Pediatric doctor", producer: "Arnon Manor/Kelsey Bascom" },
		{ show: "Expats", role: "Nurse", producer: "LULU WANG" },
		{ show: "Physical", role: "FEDCO Shopper #2", producer: "Stephanie Laing" },
		{ show: "Fauk My Life", role: "Series regular", producer: "Stephanie Neroes" },
		{ show: "Echo", role: "Supporting Lead", producer: "John Geronilla" },
		{ show: "Diana Leigh", role: "Supporting Lead", producer: "Stephanie Houston" },
		{ show: "What Really Matters", role: "Supporting Lead", producer: "William Bright" },
		{ show: "Faux Pas", role: "Lead", producer: "Edward Chitate" },
		{ show: "Don't Go To Strangers", role: "Supporting Lead", producer: "Nathan Osbourne" },
		{ show: "Jungle To Jungle", role: "Statue Of Liberty Tourist", producer: "John Pasquin" },
		{ show: "Chris Rock Show", role: "Recurring", producer: "HBO Productions" },
		{ show: "New York's Burning", role: "Lead", producer: "Ron Riley" },
		{ show: "Maternity Ward", role: "Lead", producer: "WHC Productions" },
		{ show: "Notes is a Minor Key", role: "Supporting", producer: "Avery O. Williams/ADISA" },
		{ show: "Lead Generation", role: "Army Sergeant/Lead", producer: "DLA Productions" },
		{ show: "Law And Order", role: "Featured", producer: "WOLF Films" },
		{ show: "Matlock", role: "Judge Bjornstad", type: "Recurring" }
	]

	interface CinemaRole {
		date: string
		film: string
		role: string
	}

const cinemaRoles: CinemaRole[] = [
	{ date: "2016", film: "Independent Feature", role: "Supporting Character" },
	{ date: "2018", film: "Short Film", role: "Lead" },
	{ date: "2021", film: "Feature Film", role: "Supporting Role" }
]

interface TheaterRole {
	show: string
	role?: string
	type?: string
	producer?: string
}

const theaterRoles: TheaterRole[] = [
	{ show: "Ages of The Menopause", role: "Ms. Brown (2025)", producer: "Tymeka Coney, Director" },
	{ show: "Color Of Love", role: "", producer: "" },
	{ show: "Harriet Tubman Visits A Therapist", role: "Lead (Therapist)", producer: "Winner Samuel French Competition" },
	{ show: "Escher’S Staircase", role: "Lead (Flight Commander)", producer: "Harold Clurman Theatre, NYC" },
	{ show: "Evelyn and The Environment", role: "Supporting", producer: "Lovecreek Productions, NYC" },
	{ show: "“Secrets” Tour", role: "Ensemble", producer: "Roberta Gasbarre, Director" },
	{ show: "The Widows", role: "Supporting", producer: "Workhouse Theatre, NYC" },
	{ show: "The Odd Couple", role: "Gwendolyn", producer: "Jubilee Fish Theatre, ALABAMA" },
	{ show: "Grown Up’s Playground", role: "Improv Group", producer: "New York Comedy Club" },
	{ show: "Hatful Of Rain", role: "Celia", producer: "Mary Margaret Theatre, NYC" },
	{ show: "Andromache", role: "Hermione", producer: "Mary Margaret Theatre, NYC" }
]

interface Training {
	item: string
}
const trainingItems: Training[] = [
	{ item: 'American Academy of Dramatic Arts - NYC' },
	{ item: 'The Groundlings (Scholarship Winner)' },
	{ item: 'Brian Reese Acting Studios - LA' },
	{ item: 'Studio Theatre Acting Conservatory - Washington D.C.' },
	{ item: 'Soap Opera Workshop / Gail Comacho - NYC' },
	{ item: 'AIA Three Of Us / Delphi Harrington - NYC' },
	{ item: 'Weist - Barron - NYC' },
	{ item: 'Private Coaching with Nathan George' },
	{ item: 'BA - Film Production' },
] 
</script>
<template>
	<div class="w-full flex flex-col gap-4 pb-24">
		<div class="flex flex-col sm:flex-row sm:flex-row-reverse sm:items-center gap-4">
			<div class="gallery-container relative w-full">
				<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
					<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
						<NuxtImg
							:src="image.src"
							:alt="image.alt"
							sizes="100vw sm:100vw md:100vw"
							class="h-screen w-full object-cover object-top"
							format="webp"
							quality="80"
							loading="lazy"
						/>
					</div>
				</div>

				<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
				<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 sm:hidden">
					<h2 class="mt-2 max-w-md text-4xl font-medium sm:text-4xl lg:hidden drop-shadow-[1px_3px_5px_rgba(0,0,0,0.8)]">{{ BioHeader }}</h2>
				</div>
			</div>
			<div class="content px-8 py-24 sm:w-4/5">
				<h2 class="hidden sm:block mt-2 mb-16 w-full max-w-md text-xl">{{ BioHeader }}</h2>
				<p>{{ BioParagraph }}
				</p>
			</div>
		</div>
		<div class="px-8 flex flex-col lg:flex-row lg:gap-24 lg:mt-24">
			<div class="mt-8">
				<h2 class="text-2xl font-medium uppercase mb-8">Film and Television</h2>
				<ul class="flex flex-col text-xl md:grid md:grid-cols-3 gap-4">
					<li v-for="(role, index) in tvRoles" :key="index" class="flex flex-col justify-start">
						<span>
							<span class="font-semibold">{{ role.show }} - </span>
							<span>{{ role.role }}</span>
						</span>
						<span v-if="role.producer" class="opacity-70">Producer: {{ role.producer }}</span>
						<span v-if="role.type" class="opacity-70">Role: {{ role.type }}</span>
					</li>
				</ul>
			</div>
			<div class="mt-8">
				<h2 class="text-2xl font-medium uppercase mb-8">Theatre</h2>
				<ul class="text-xl flex flex-col md:grid md:grid-cols-2 gap-4">
					<li v-for="(role, index) in theaterRoles" :key="index" class="flex flex-col gap-1">
						<span>
							<span class="font-semibold">{{ role.show }} - </span>
							<span>{{ role.role }}</span>
						</span>
						<span v-if="role.producer" class="opacity-70">Producer: {{ role.producer }}</span>
						<span v-if="role.type" class="opacity-70">Role: {{ role.type }}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="px-8">
			<div class="mt-8">
				<h2 class="text-2xl font-medium uppercase mb-8">Training</h2>
				<ul class="text-xl flex flex-col lg:grid lg:grid-cols-2 gap-4">
					<li v-for="(i, index) in trainingItems" :key="index" class="flex flex-col justify-start">
						<span>
							<span>{{ i.item }}</span>
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
