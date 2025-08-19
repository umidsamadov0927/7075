<template>
  <main>
    <section>
      <div class="bg-[#000000]">
        <div class="grid grid-cols-3 gap-y-[20px] cursor-pointer  w-[1300px] mx-auto">
          <div v-for="(newCard, index) in filterData" :key="index" >
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
import {computed} from "vue";

let props = defineProps({
  selectedCategory: {}
})
let filterData = computed(()=>{
  if (props.selectedCategory === "all"){
    return newCardData;
  }
  return newCardData.filter(item => item.productName === props.selectedCategory);
})
</script>