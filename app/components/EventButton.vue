<script setup lang="ts">
const handleClick = () => {
  useTrackEvent('test_click', {
    buttonName: 'hero_cta',
    page: 'homepage'
  })
}
</script>

<template>
  <div class="p-8">
    <button 
      @click="handleClick()"
      class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
    >
      Fire GA4 Test Event
    </button>
  </div>
</template>