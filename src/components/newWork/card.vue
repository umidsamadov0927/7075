<template>
  <main>
    <section>
      <div class="bg-[#000000]">
        <div class="grid grid-cols-3 gap-y-[20px] cursor-pointer  w-[1300px] mx-auto">
          <div v-for="(newCard, index) in newCardData" :key="index" >
            <SectionTwoCard :newCard="newCard"/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import {newCardData} from "../../data/newCardData.js";
import SectionTwoCard from "./sectionTwoCard.vue";

</script>