<template>
  <main>
    <section>
      <div class="bg-[#000000]">
        <p class="text-[32px] pt-[80px] pb-[30px] w-[340px] mx-auto font-[700]">Bajargan loyihalarimiz</p>
        <div class="flex justify-center pb-[30px]">
          <div class="flex bg-[#111] rounded-full p-1 shadow-md">
            <input type="radio" name="category" value="all" v-model="selectedCategory" id="all" class="hidden peer/all" checked>
            <label for="all" class="px-6 py-2 rounded-full font-medium text-sm cursor-pointer text-white transition peer-checked/all:bg-gradient-to-r peer-checked/all:from-purple-600 peer-checked/all:to-indigo-600">Barchasi</label>
            <input type="radio" name="category" value="Veb sayt" v-model="selectedCategory" id="web" class="hidden peer/web">
            <label for="web" class="px-6 py-2 rounded-full font-medium text-sm cursor-pointer text-white transition peer-checked/web:bg-gradient-to-r peer-checked/web:from-purple-600 peer-checked/web:to-indigo-600">Veb sayt</label>
            <input type="radio" name="category" value="Veb dizayn" v-model="selectedCategory" id="design" class="hidden peer/design">
            <label for="design" class="px-6 py-2 rounded-full font-medium text-sm cursor-pointer text-white transition peer-checked/design:bg-gradient-to-r peer-checked/design:from-purple-600 peer-checked/design:to-indigo-600">Veb dizayn</label>
            <input type="radio" name="category" value="SMM" v-model="selectedCategory" id="smm" class="hidden peer/smm">
            <label for="smm" class="px-6 py-2 rounded-full font-medium text-sm cursor-pointer text-white transition peer-checked/smm:bg-gradient-to-r peer-checked/smm:from-purple-600 peer-checked/smm:to-indigo-600">SMM</label>
            <input type="radio" name="category" value="Mobil ilova" v-model="selectedCategory" id="mobile" class="hidden peer/mobile">
            <label for="mobile" class="px-6 py-2 rounded-full font-medium text-sm cursor-pointer text-white transition peer-checked/mobile:bg-gradient-to-r peer-checked/mobile:from-purple-600 peer-checked/mobile:to-indigo-600">Mobil ilova</label>
          </div>
        </div>

        <Card :selectedCategory="selectedCategory"/>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Card from "./card.vue";

let selectedCategory = ref("all");
</script>
