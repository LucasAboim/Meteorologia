<template>
    <div class="min-h-screen bg-gray-100 text-gray-900">
      <!-- Cabeçalho -->
      <header class="bg-blue-600 text-white p-4 text-center">
        <nav class="flex justify-center space-x-4">
          <NuxtLink to="/" class="hover:underline">🏠 Início</NuxtLink>
          <NuxtLink to="/settings" class="hover:underline">⚙️ Configurações</NuxtLink>
        </nav>
      </header>
  
      <!-- Conteúdo da Página -->
      <main class="p-4">
        <slot />
      </main>
    </div>
  </template>
  