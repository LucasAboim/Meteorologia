<script setup>
import { useWeatherStore } from '@/stores/weatherStore'
import { ref } from 'vue'

const weatherStore = useWeatherStore()
const cityInput = ref('')
const isEditing = ref(false)

async function updateCity() {
  if (cityInput.value.trim() !== '') {
    await weatherStore.setLocation(cityInput.value.trim())
    isEditing.value = false
  }
}
</script>

<template>
  <div class="text-center p-6">
    <h1 class="text-2xl font-bold scale-150">Configurações</h1>

    <label class="block mt-6 scale-150">Escolhe uma cidade:</label>
    <div class="flex justify-center scale-150 mt-6">
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
        @click="isEditing = true; cityInput = weatherStore.location.name"
      >
        {{ weatherStore.location.name }}
      </p>
    </div>

    <label class="block mt-4 scale-150 mt-6">Unidade de temperatura:</label>
    <select v-model="weatherStore.unit" class="mt-2 p-2 border rounded w-48 bg-white focus:bg-[#ebb200] focus:text-white scale-150 mt-6">
      <option value="C">Celsius (°C)</option>
      <option value="F">Fahrenheit (°F)</option>
    </select>
  </div>
</template>
