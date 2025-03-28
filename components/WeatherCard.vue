<script setup>
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTemperatureHalf, faWind } from '@fortawesome/free-solid-svg-icons'
import { computed } from 'vue'
import { useWeatherStore } from '@/stores/weatherStore'

const props = defineProps({
  weatherData: Object,
  loading: Boolean,
  error: String
})

const weatherStore = useWeatherStore()

const temperature = computed(() => {
  if (!props.weatherData) return null
  return weatherStore.unit === 'F' 
    ? (props.weatherData.temperature ) + '°F' 
    : props.weatherData.temperature + '°C'
})

const weatherDescription = computed(() => {
  if (!props.weatherData) return null
  return {
    temperature: temperature.value,
    windspeed: props.weatherData.windspeed
  }
})
</script>

<template>
  <div class="p-1">
  <Card class="max-w-md mx-auto shadow-lg rounded-lg scale-150 mt-12">
    <CardHeader class="flex flex-col items-center">
      <CardTitle class="text-lg font-semibold">Tempo Atual</CardTitle>
      <WeatherIcon v-if="weatherData" :weatherCode="weatherData.weathercode" />
    </CardHeader>
    <CardContent v-if="!loading && !error && weatherData" class="text-gray-700 text-base text-center">
      <p>
        <FontAwesomeIcon :icon="faTemperatureHalf" />
        {{ weatherDescription.temperature }} |
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
</div>
</template>