<template>
  <section class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>
    <p class="text-gray-600 mb-8">
      Agar savollaringiz bo‘lsa, quyidagi forma orqali bizga yozishingiz mumkin.
    </p>

    <form class="bg-white shadow-lg rounded-2xl p-8 max-w-lg mx-auto space-y-6">

      <div>
        <label class="block text-gray-700 font-medium mb-2">Name</label>
        <input v-model="textOne" type="text" placeholder="Your name" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>


      <div>
        <label class="block text-gray-700 font-medium mb-2">Email</label>
        <input type="email" placeholder="Your email" class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Message</label>
        <textarea rows="5" placeholder="Your message..." class="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
      </div>

      <button type="submit" class="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </section>
</template>
<script setup>
import {ref} from "vue";

let textOne = ref("")
console.log(textOne)
</script>
