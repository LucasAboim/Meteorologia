<template>
  <div class="min-h-screen bg-background text-foreground">

    <header class="bg-[#bc8e00] text-white relative">
      <div class="container mx-auto flex justify-between items-center p-4 relative">

        <NuxtLink to="/" class="text-xl font-bold flex items-center space-x-2">
          <span>Meteorologia</span>
        </NuxtLink>

        <nav class="hidden md:flex space-x-6 absolute left-1/2 -translate-x-1/2">
          <NuxtLink to="/" class="hover:text-gray-300 transition flex items-center space-x-1">
            <font-awesome-icon :icon="['fas', 'house']" />
            <span>Início</span>
          </NuxtLink>
          <NuxtLink to="/settings" class="hover:text-gray-300 transition flex items-center space-x-1">
            <font-awesome-icon :icon="['fas', 'cog']" />
            <span>Configurações</span>
          </NuxtLink>
        </nav>

        <!-- Botão do hambrugo -->
        <button @click="menuOpen = !menuOpen" class="md:hidden focus:outline-none">
          <font-awesome-icon :icon="menuOpen ? ['fas', 'times'] : ['fas', 'bars']" />
        </button>
      </div>

      <!-- telemovel -->
      <nav v-if="menuOpen" class="md:hidden bg-[#dea700] text-center py-2 space-y-2">
        <NuxtLink to="/" class="block hover:bg-[#d19f00] p-2 flex justify-center items-center space-x-1">
          <font-awesome-icon :icon="['fas', 'house']" />
          <span>Início</span>
        </NuxtLink>
        <NuxtLink to="/settings" class="block hover:bg-[#d19f00] p-2 flex justify-center items-center space-x-1">
          <font-awesome-icon :icon="['fas', 'cog']" />
          <span>Configurações</span>
        </NuxtLink>
      </nav>
      
    </header>

    <main class="container mx-auto p-4">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faCog, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHouse, faCog, faBars, faTimes);

const menuOpen = ref(false);
</script>
