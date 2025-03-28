<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
import { ref, computed } from 'vue'

const weatherStore = useWeatherStore()
const cityInput = ref('')
const isEditing = ref(false)

const selectedCity = computed({
  get: () => weatherStore.location.name,
  set: (newName) => {
    const city = weatherStore.cities.find(c => c.name.toLowerCase() === newName.toLowerCase())
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

function updateCity() {
  const city = weatherStore.cities.find(c => c.name.toLowerCase() === cityInput.value.toLowerCase())
  if (city) {
    weatherStore.setLocation(city)
    isEditing.value = false // Sai do modo de edição após definir a cidade
  }
}
</script>

<template>
  <div class="text-center p-6">
    <h1 class="text-2xl font-bold scale-150">Configurações</h1>

    <label class="block mt-6  scale-150">Escolhe uma cidade:</label>
    <div class="flex justify-center  scale-150 mt-6">
      <input 
        v-if="isEditing"
        v-model="cityInput" 
        @keyup.enter="updateCity" 
        @blur="isEditing = false"
        placeholder="Digite a cidade e pressione Enter" 
        class="mt-2 p-2 border rounded text-center w-48"
      />
      <p 
        v-else 
        class="mt-2 p-2 border rounded text-center text-gray-700 cursor-pointer w-48" 
        @click="isEditing = true; cityInput = selectedCity"
      >
        {{ selectedCity }}
      </p>
    </div>

    <label class="block mt-4  scale-150 mt-6">Unidade de temperatura:</label>
    <select v-model="selectedUnit" class="mt-2 p-2 border rounded w-48 bg-white focus:bg-[#ebb200] focus:text-white scale-150 mt-6">
      <option value="C">Celsius (°C)</option>
      <option value="F">Fahrenheit (°F)</option>
    </select>
  </div>
</template>

