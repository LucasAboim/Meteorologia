<template>
    <button @click="fetchWeather" class="mt-4 bg-blue-600 text-white p-2 rounded">
      Atualizar Dados
    </button>
  </template>
  
  <script setup>
  defineProps({
    fetchWeather: Function
  })
  </script>
  