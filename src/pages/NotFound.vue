<template>
  <section class="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
    <h1 class="text-9xl font-extrabold text-blue-600">404</h1>
    <h2 class="text-3xl font-bold text-gray-800 mt-4 mb-2">
      Page Not Found
    </h2>
    <p class="text-gray-600 mb-6">
      Kechirasiz, siz qidirgan sahifa mavjud emas yoki ko‘chirib yuborilgan.
    </p>
    <router-link
        to="/"
        class="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
    >
      Go Home
    </router-link>
  </section>
</template>
