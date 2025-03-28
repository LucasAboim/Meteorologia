<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import WeatherIcon from '@/components/WeatherIcon.vue'
import { computed } from 'vue'

const props = defineProps({
  weatherData: Object,
  loading: Boolean,
  error: String
})

const weatherDescription = computed(() => {
  if (!props.weatherData) return 'Carregando...'
  return `🌡️ ${props.weatherData.temperature}°C | 💨 ${props.weatherData.windspeed} km/h`
})
</script>

<template>
  <Card class="max-w-md mx-auto mt-6 shadow-lg rounded-lg">
    <CardHeader class="flex flex-col items-center">
      <CardTitle class="text-lg font-semibold">Tempo Atual</CardTitle>
      <WeatherIcon v-if="weatherData" :weatherCode="weatherData.weathercode" />
    </CardHeader>
    <CardContent v-if="!loading && !error" class="text-gray-700 text-base text-center">
      <p>{{ weatherDescription }}</p>
    </CardContent>
    <CardContent v-if="loading" class="text-blue-500 text-center">
      <p>Carregando...</p>
    </CardContent>
    <CardContent v-if="error" class="text-red-500 text-center">
      <p>{{ error }}</p>
    </CardContent>
  </Card>
</template>
