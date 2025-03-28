import { ref, computed } from 'vue'
import { useWeatherStore } from '@/stores/weatherStore'

interface WeatherData {
  temperature: number
  windspeed: number
  weathercode: number
}

export function useWeather() {
  const weatherStore = useWeatherStore()
  const weatherData = ref<WeatherData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchWeather = async () => {
    loading.value = true
    error.value = null

    try {
      const { lat, lon } = weatherStore.location

      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=${weatherStore.unit === 'C' ? 'celsius' : 'fahrenheit'}`)
      const data = await res.json()

      weatherData.value = data.current_weather
    } catch (err) {
      error.value = 'Erro ao obter os dados'
    } finally {
      loading.value = false
    }
  }

  const weatherIcon = computed(() => {
    if (!weatherData.value) return 'sun'

    const code = weatherData.value.weathercode
    if (code === 0) return 'sun'
    if (code >= 1 && code <= 3) return 'cloud'
    if (code >= 45 && code <= 48) return 'smog'
    if (code >= 51 && code <= 67) return 'cloud-rain'
    if (code >= 71 && code <= 77) return 'snowflake'
    if (code >= 80 && code <= 99) return 'wind'

    return 'sun'
  })

  return { weatherData, loading, error, fetchWeather, weatherIcon }
}
