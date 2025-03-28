<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTemperatureHalf, faWind, faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'

const props = defineProps({
  weatherData: Object,
  loading: Boolean,
  error: String
})

const weatherDescription = computed(() => {
  if (!props.weatherData) return null
  return {
    temperature: props.weatherData.temperature,
    windspeed: props.weatherData.windspeed
  }
})
</script>

<template>
  <Card class="max-w-md mx-auto mt-6 shadow-lg rounded-lg">
    <CardHeader class="flex flex-col items-center">
      <CardTitle class="text-lg font-semibold">Tempo Atual</CardTitle>
      <WeatherIcon v-if="weatherData" :weatherCode="weatherData.weathercode" />
    </CardHeader>
    <CardContent v-if="!loading && !error && weatherData" class="text-gray-700 text-base text-center">
      <p>
        <FontAwesomeIcon :icon="faTemperatureHalf" />
        {{ weatherDescription.temperature }}°C |
        <FontAwesomeIcon :icon="faWind" />
        {{ weatherDescription.windspeed }} km/h
      </p>
    </CardContent>
    <CardContent v-if="loading" class="text-blue-500 text-center">
      <p>Carregando...</p>
    </CardContent>
    <CardContent v-if="error" class="text-red-500 text-center">
      <p>{{ error }}</p>
    </CardContent>
  </Card>
</template>
