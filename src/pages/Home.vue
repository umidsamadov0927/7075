<template>
  <section class="container mx-auto px-6 py-12">
    <!-- Hero -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Welcome to My Website
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        Bu sayt orqali bizning xizmatlarimiz, yangiliklarimiz va bog‘lanish
        imkoniyatlaringizni topasiz.
      </p>
      <router-link
          to="./Services"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Get Started
      </router-link>
    </div>

    <!-- Services -->
    <div id="services" class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">Service One</h3>
        <p class="text-gray-600 mb-4">
          Birinchi xizmatimiz haqida qisqacha ma’lumot.
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">Read more</router-link>
      </div>

      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">Service Two</h3>
        <p class="text-gray-600 mb-4">
          Ikkinchi xizmatimiz haqida qisqacha ma’lumot.
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">Read more</router-link>
      </div>

      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">Service Three</h3>
        <p class="text-gray-600 mb-4">
          Uchinchi xizmatimiz haqida qisqacha ma’lumot.
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">Read more</router-link>
      </div>
    </div>
  </section>
</template>
