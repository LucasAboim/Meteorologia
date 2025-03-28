import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useWeatherStore = defineStore('weather', () => {
  const cities = [
    { name: 'Aveiro', lat: 40.64, lon: -8.65 },
    { name: 'Lisboa', lat: 38.72, lon: -9.13 },
    { name: 'Porto', lat: 41.15, lon: -8.61 },
    { name: 'Faro', lat: 37.02, lon: -7.93 },
    { name: 'Coimbra', lat: 40.21, lon: -8.43 },
    { name: 'Braga', lat: 41.55, lon: -8.42 },
    { name: 'Guimarães', lat: 41.44, lon: -8.29 },
    { name: 'Viseu', lat: 40.66, lon: -7.91 },
    { name: 'Évora', lat: 38.57, lon: -7.91 },
    { name: 'Leiria', lat: 39.74, lon: -8.80 },
    { name: 'Serra da Estrela', lat: 40.32, lon: -7.61 },
    { name: 'Madrid', lat: 40.42, lon: -3.70 },
    { name: 'Paris', lat: 48.85, lon: 2.35 },
    { name: 'Londres', lat: 51.51, lon: -0.13 },
    { name: 'Berlim', lat: 52.52, lon: 13.40 },
    { name: 'Moscovo', lat: 55.75, lon: 37.62 },
    { name: 'Nova Iorque', lat: 40.71, lon: -74.01 },
    { name: 'Tóquio', lat: 35.68, lon: 139.76 },
    { name: 'Oslo', lat: 59.91, lon: 10.75 }
  ]

  const defaultLocation = cities[0] // Aveiro como padrão
  const defaultUnit = 'C'

  const storedCityName = useLocalStorage('weather-location', defaultLocation.name)
  const storedUnit = useLocalStorage('weather-unit', defaultUnit)

const unit = computed(() => storedUnit.value)

function setUnit(newUnit: string) {
  storedUnit.value = newUnit
}


  const location = computed(() => {
    return cities.find(c => c.name === storedCityName.value) || defaultLocation
  })

  function setLocation(newLocation: { name: string; lat: number; lon: number }) {
    storedCityName.value = newLocation.name 
  }

  

  return { location, unit, cities, setLocation, setUnit }
})
