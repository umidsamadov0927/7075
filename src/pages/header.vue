<script setup>

</script>
<template>
  <header class="bg-gray-900 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-10">
      <h1 class="text-2xl font-bold">My Website</h1>
      <nav class="flex gap-6">
        <router-link to="/" class="hover:text-gray-300">Home</router-link>
        <router-link to="./about" class="hover:text-gray-300">About</router-link>
        <router-link to="./services" class="hover:text-gray-300">Services</router-link>
        <router-link to="./contact" class="hover:text-gray-300">Contact</router-link>
      </nav>
    </div>
  </header>
</template>