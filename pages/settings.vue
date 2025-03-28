<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
import { computed } from 'vue'

const weatherStore = useWeatherStore()

const selectedCity = computed({
  get: () => weatherStore.location.name,
  set: (newName) => {
    const city = weatherStore.cities.find(c => c.name === newName)
    if (city) {
      weatherStore.setLocation(city)
    }
  }
})

const selectedUnit = computed({
  get: () => weatherStore.unit,
  set: (newUnit) => {
    weatherStore.setUnit(newUnit)
  }
})
</script>

<template>
  <div class="text-center p-6">
    <h1 class="text-2xl font-bold">Configurações</h1>

    <label class="block mt-4">Escolhe uma cidade:</label>
    <select v-model="selectedCity" class="mt-2 p-2 border rounded">
      <option v-for="city in weatherStore.cities" :key="city.name" :value="city.name">
        {{ city.name }}
      </option>
    </select>

    <label class="block mt-4">Unidade de temperatura:</label>
    <select v-model="selectedUnit" class="mt-2 p-2 border rounded">
      <option value="C">Celsius (°C)</option>
      <option value="F">Fahrenheit (°F)</option>
    </select>
  </div>
</template>
