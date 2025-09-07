<template>
  <header class="bg-gray-900 text-white shadow-md">
    <div class="container mx-auto flex justify-between items-center py-4 px-10">
      <h1 class="text-2xl font-bold">{{ $t("header_text_five") }}</h1>
      <nav class="flex gap-6">
        <router-link to="/" class="hover:text-gray-300">{{ $t("header_text_one") }}</router-link>
        <router-link to="./about" class="hover:text-gray-300">{{ $t("header_text_two") }}</router-link>
        <router-link to="./services" class="hover:text-gray-300">{{ $t("header_text_three") }}</router-link>
        <router-link to="./contact" class="hover:text-gray-300">{{ $t("header_text_four") }}</router-link>
        <router-link to="./api" class="hover:text-gray-300">Api</router-link>
        <select class="text-black outline-none" v-model="changeLanguageValue" @change="languageValueChange">
          <option v-for="language in languageValue" :value="language.value"> {{language.label}} </option>
        </select>
      </nav>
    </div>
  </header>
</template>
<script setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

let {locale} = useI18n();
let languageValue = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'uz',
    label: 'Uzbek'
  },
  {
    value: 'ru',
    label: 'Русский'
  }
]
let changeLanguage = localStorage.getItem('language') || 'uz'
let changeLanguageValue = ref(changeLanguage)
locale.value = changeLanguageValue.value;
function languageValueChange() {
  locale.value = changeLanguageValue.value;
  localStorage.setItem('language', changeLanguageValue.value);
}
</script>