<script setup lang="ts">
const text = "Roles"
interface GalleryImage {
	id: number | string
	src: string
	alt: string
}
const images: GalleryImage[] = [{ id: 3, src: "/gallery/headshot.jpg", alt: "Studio Photography" }]

interface TVRole {
	show: string
	role?: string
	type?: string
	producer?: string
}

const tvRoles: TVRole[] = [
	{ show: "Matlock", role: "Judge Bjornstad", type: "Recurring" },
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
	{ show: "Law And Order", role: "Featured", producer: "WOLF Films" }
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
	city: string
	play: string
	producer: string
	role: string
	award?: string
}

const theaterRoles: TheaterRole[] = [
	{ city: "Minneapolis", play: "A Midsummer Night's Dream", producer: "Jane Smith", role: "Hermia" },
	{ city: "St. Paul", play: "The Glass Menagerie", producer: "John Doe", role: "Laura Wingfield" },
	{ city: "Chicago", play: "Death of a Salesman", producer: "Mary Johnson", role: "Linda Loman" }
]
</script>
<template>
	<div class="flex flex-col gap-4">
		<div class="md:w-full md:flex md:justify-start md:items-center">
			<div class="gallery-container relative">
			<div class="hide-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth">
				<div v-for="image in images" :key="image.id" class="relative w-full flex-shrink-0 snap-center">
					<NuxtImg
						:src="image.src"
						:alt="image.alt"
						class="h-screen w-full object-cover"
						format="webp"
						quality="80"
						loading="lazy"
					/>
				</div>
			</div>

			<div v-if="images.length === 0" class="mt-4 text-center">// NO_IMAGES_FOUND</div>
			<div class="flex flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-end px-8 pb-16 text-white sm:p-16 md:hidden">
				<h2 class="mt-2 max-w-md text-4xl font-medium uppercase sm:text-4xl md:hidden">{{ text }}</h2>
			</div>
		</div>
		<div class="content md:w-3/4">
			<h2 class="hidden md:flex mt-2 w-full max-w-md text-2xl text-3xl font-medium uppercase sm:text-4xl">Roles</h2>
			<p class="text-lg md:text-xl md:leading-12 mb-8">
				Deana J. Becker holds a Bachelor of Fine Arts (BFA) degree in Theatre from the University of Minnesota, where
				she honed her acting skills and developed a deep appreciation for the performing arts. Her formal education
				provided a strong foundation for her successful career in television, film, and voiceover work.
			</p>
		</div>
		</div>
		<div class="md:w-3/4">
			<div class="mt-8">
				<h2 class="text-2xl font-medium uppercase mb-8">Film and Television</h2>
				<ul class="text-lg grid grid-cols-2">
					<li v-for="(role, index) in tvRoles" :key="index" class="flex flex-col justify-start">
						<span class="font-medium">{{ role.show }}</span>
						<span class="text-slate-500 dark:text-yellow-50/50">{{ role.role }}</span>
						<span v-if="role.producer">{{ role.producer }}</span>
					</li>
				</ul>
			</div>
			<div>
				<h2 class="text-2xl font-medium uppercase">Theater</h2>
				<ul class="space-y-4 text-lg">
					<li v-for="(role, index) in theaterRoles" :key="index" class="flex flex-col gap-1">
						<span class="font-medium">{{ role.play }}</span>
						<span class="text-slate-500 dark:text-yellow-50/50">{{ role.role }} - Directed by {{ role.producer }}</span>
						<span class="text-sm text-gray-500">{{ role.city }}</span>
						<span v-if="role.award" class="text-sm text-gray-500">{{ role.award }}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
