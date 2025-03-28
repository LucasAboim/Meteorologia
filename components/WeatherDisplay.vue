<template>
  <div v-if="loading" class="text-gray-500">A carregar...</div>
  <div v-else-if="error" class="text-red-500">{{ error }}</div>
  <Card v-else-if="weatherData">
    <div class="flex flex-col items-center text-center space-y-4">
      <WeatherIcon :weatherCode="weatherData.weathercode" />
      <p class="text-xl font-semibold">Temperatura: {{ weatherData.temperature }}°{{ weatherStore.unit }}</p>
      <p class="text-gray-600">Vento: {{ weatherData.windspeed }} km/h</p>
    </div>
  </Card>
</template>

<script setup>
import WeatherIcon from './WeatherIcon.vue'
import { useWeatherStore } from '@/stores/weatherStore'

defineProps({
  weatherData: Object,
  loading: Boolean,
  error: String
})

const weatherStore = useWeatherStore()
</script>
