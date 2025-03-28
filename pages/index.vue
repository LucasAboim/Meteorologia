<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
import { useWeather } from '@/composables/useWeather'
import { onMounted } from 'vue'
import WeatherDisplay from '@/components/WeatherDisplay.vue'
import UpdateButton from '@/components/UpdateButton.vue'

const weatherStore = useWeatherStore()
const { weatherData, loading, error, fetchWeather } = useWeather()

onMounted(fetchWeather)
</script>

<template>
  <div class="text-center p-6">
    <h1 class="text-2xl font-bold text-blue-500">Meteorologia</h1>
    <h2 class="text-xl font-semibold">Local: {{ weatherStore.location.name }}</h2>

    <WeatherDisplay :weatherData="weatherData" :loading="loading" :error="error" />
    <UpdateButton :fetchWeather="fetchWeather" />
  </div>
</template>
