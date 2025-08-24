<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
      Our Services
    </h2>

    <!-- Services grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
        <div class="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-2xl font-bold">
          1
        </div>
        <h3 class="text-xl font-semibold mb-2">Web Development</h3>
        <p class="text-gray-600 mb-4">
          Bizning mutaxassislar jamoasi zamonaviy va tezkor web saytlar ishlab chiqadi.
        </p>
        <router-link to="#" class="text-blue-600 hover:underline">Read more</router-link>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
        <div class="w-16 h-16 mx-auto mb-4 bg-green-100 text-green-600 flex items-center justify-center rounded-full text-2xl font-bold">
          2
        </div>
        <h3 class="text-xl font-semibold mb-2">Mobile Apps</h3>
        <p class="text-gray-600 mb-4">
          iOS va Android uchun foydalanuvchi qulay ilovalarni ishlab chiqamiz.
        </p>
        <router-link to="#" class="text-green-600 hover:underline">Read more</router-link>
      </div>

      <div class="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition">
        <div class="w-16 h-16 mx-auto mb-4 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full text-2xl font-bold">
          3
        </div>
        <h3 class="text-xl font-semibold mb-2">UI/UX Design</h3>
        <p class="text-gray-600 mb-4">
          Sayt va ilovalaringiz uchun chiroyli va qulay dizayn yaratamiz.
        </p>
        <router-link to="#" class="text-purple-600 hover:underline">Read more</router-link>
      </div>
    </div>
  </section>
</template>

