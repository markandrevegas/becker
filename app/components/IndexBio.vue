<script setup lang="ts">
const text = "Bio and Roles"
interface GalleryImage {
  id: number | string
  src: string
  alt: string
}
const images: GalleryImage[] = [
  { id: 3, src: '/gallery/three.jpg', alt: 'Studio Photography' },
]

interface TVRole {
  date: string
  show: string
  episode?: string
  role: string
  type: 'TV' | 'Commercial'
}

const tvRoles: TVRole[] = [
  { date: '2015', show: "Grey's Anatomy", episode: 'S12E08', role: 'Nurse', type: 'TV' },
  { date: '2016', show: 'NCIS', episode: 'S14E05', role: 'Forensic Technician', type: 'TV' },
  { date: '2017', show: 'The Office', episode: 'S9E12', role: 'Office Worker', type: 'TV' },
  { date: '2018', show: 'Commercial', role: 'Lead', type: 'Commercial' },
  { date: '2019', show: 'Commercial', role: 'Featured', type: 'Commercial' },
  { date: '2020', show: "Grey's Anatomy", episode: 'S17E03', role: 'Patient', type: 'TV' }
]

interface CinemaRole {
  date: string
  film: string
  role: string
}

const cinemaRoles: CinemaRole[] = [
  { date: '2016', film: 'Independent Feature', role: 'Supporting Character' },
  { date: '2018', film: 'Short Film', role: 'Lead' },
  { date: '2021', film: 'Feature Film', role: 'Supporting Role' }
]

interface TheaterRole {
  city: string
  play: string
  director: string
  role: string
  dates: string
}

const theaterRoles: TheaterRole[] = [
  { city: 'Minneapolis', play: 'A Midsummer Night\'s Dream', director: 'Jane Smith', role: 'Hermia', dates: 'March 2014 - April 2014' },
  { city: 'St. Paul', play: 'The Glass Menagerie', director: 'John Doe', role: 'Laura Wingfield', dates: 'October 2015 - November 2015' },
  { city: 'Chicago', play: 'Death of a Salesman', director: 'Mary Johnson', role: 'Linda Loman', dates: 'February 2017 - March 2017' }
]
</script>
<template>
	<div class="flex flex-col gap-4">
		<div class="gallery-container relative">
      <div class="flex w-full overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar overflow-y-hidden">
        
        <div v-for="image in images" :key="image.id" class="w-full flex-shrink-0 snap-center relative">
          <NuxtImg :src="image.src" :alt="image.alt" class="w-full h-screen object-cover" format="webp" quality="80" loading="lazy" />
        </div>
      </div>
      
      <div v-if="images.length === 0" class="mt-4 text-center">
        // NO_IMAGES_FOUND
      </div>
      <div class="flex-flex-col absolute bottom-0 left-0 right-0 z-30 h-72 justify-start p-6 text-white">
        <h2 class="text-2xl font-medium mt-2 max-w-md uppercase">{{ text }}</h2>
      </div>
    </div>
		<div class="p-8 flex flex-col gap-16 mt-16 mb-24">
			<div>
        <h2 class="text-2xl font-display font-medium mb-8">Theater</h2>
				<p class="text-lg mb-6">
					Deana J. Becker holds a Bachelor of Fine Arts (BFA) degree in Theatre from the University of Minnesota, where she honed her acting skills and developed a deep appreciation for the performing arts. Her formal education provided a strong foundation for her successful career in television, film, and voiceover work.
				</p>
				<ul class="text-lg space-y-4">
					<li v-for="(role, index) in theaterRoles" :key="index" class="flex flex-col gap-1">
						<span class="font-medium">{{ role.play }}</span>
						<span class="text-gray-600">{{ role.role }} - Directed by {{ role.director }}</span>
						<span class="text-sm text-gray-500">{{ role.city }} | {{ role.dates }}</span>
					</li>
				</ul>
			</div>
			<div>
        <h2 class="text-2xl font-display font-medium mb-8">Cinema</h2>
				<ul class="text-lg space-y-4">
					<li v-for="(role, index) in cinemaRoles" :key="index" class="flex flex-col gap-1">
						<span class="font-medium">{{ role.film }}</span>
						<span class="text-gray-600">{{ role.role }} <span class="text-sm">({{ role.date }})</span></span>
					</li>
				</ul>
			</div>
      <div>
        <h2 class="text-2xl font-display font-medium mb-8">TV / Commercials</h2>
				<ul class="text-lg space-y-4">
					<li v-for="(role, index) in tvRoles" :key="index" class="flex flex-col gap-1">
						<span class="font-medium">{{ role.show }}<span v-if="role.episode"> - {{ role.episode }}</span></span>
						<span class="text-gray-600">{{ role.role }} <span class="text-sm">({{ role.date }})</span></span>
					</li>
				</ul>
			</div>
		</div>
	</div>
  
</template>