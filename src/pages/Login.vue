<template>
  <div
      class="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-6">
    <div class="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8">
      <h1 class="text-3xl font-bold text-center mb-6 text-gray-800">Kirish</h1>

      <form @submit.prevent="auth" class="space-y-5">
        <div>
          <label for="phone" class="block text-sm font-semibold mb-1 text-gray-700">Telefon raqam</label>
          <input
              v-model="phone"
              id="phone"
              type="text"
              placeholder="+998 90 123 45 67"
              class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-semibold mb-1 text-gray-700">Parol</label>
          <div class="relative">
            <input
                v-model="password"
                type="password"
                id="password"
                placeholder="Parolingiz"
                class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 pr-12 transition"
            />
          </div>
        </div>
        <button
            type="submit"
            class="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:opacity-90 active:scale-[0.98] transition"
        >
          Kirish
        </button>
      </form>

    </div>
  </div>
</template>
<script setup>
import {useLogin} from "../store/login.js";
import {ref} from "vue";

let phone = ref('')
let password = ref('')
let loginStore = useLogin()

function auth (){
  loginStore.login({
    phoneNumber: phone.value,
    password: password.value
  })
}
</script>