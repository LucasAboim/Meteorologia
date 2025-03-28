<template>
    <div v-if="loading" class="text-gray-500">A carregar...</div>
    <div v-else-if="error" class="text-red-500">{{ error }}</div>
    <div v-else-if="weatherData" class="weather-info">
      <WeatherIcon :weatherCode="weatherData.weathercode" />
      <p class="text-lg">Temperatura: {{ weatherData.temperature }}°{{ weatherStore.unit }}</p>
      <p>Vento: {{ weatherData.windspeed }} km/h</p>
    </div>
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
  