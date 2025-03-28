<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
import { useWeather } from '@/composables/useWeather'
import { onMounted, onUnmounted } from 'vue'
import WeatherCard from '@/components/WeatherCard.vue'

const weatherStore = useWeatherStore()
const { weatherData, loading, error, fetchWeather } = useWeather()

onMounted(() => {
  fetchWeather()
  const interval = setInterval(fetchWeather, 20000)
  onUnmounted(() => clearInterval(interval))
})
</script>

<template>
  <div class="text-center p-6">
    <h2 class="text-xl font-semibold scale-150">{{ weatherStore.location.name }}</h2>

    <WeatherCard :weatherData="weatherData" :loading="loading" :error="error" />
    <UpdateButton :fetchWeather="fetchWeather" />
  </div>
</template>

