<template>
  <section class="container mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        {{ $t("main_text_one") }}
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        {{ $t("main_text_two") }}
      </p>
      <router-link
          to="./Services"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        {{ $t("main_text_three") }}
      </router-link>
    </div>

    <div id="services" class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">{{ $t("main_text_four") }}</h3>
        <p class="text-gray-600 mb-4">
          {{ $t("main_text_seven") }}
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">{{ $t("main_text_eight") }}</router-link>
      </div>

      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">{{ $t("main_text_five") }}</h3>
        <p class="text-gray-600 mb-4">
          {{ $t("main_text_seven") }}
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">{{ $t("main_text_eight") }}</router-link>
      </div>

      <div class="bg-white shadow-md rounded-2xl p-6 text-center">
        <h3 class="text-xl font-bold mb-2">{{ $t("main_text_six") }}</h3>
        <p class="text-gray-600 mb-4">
          {{ $t("main_text_seven") }}
        </p>
        <router-link to="./about" class="text-blue-600 hover:underline">{{ $t("main_text_eight") }}</router-link>
      </div>
    </div>
  </section>
</template>
