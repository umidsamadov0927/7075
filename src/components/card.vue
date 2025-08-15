<template>
  <div class="flex gap-4">
    <div>
      <img :src="product.productPhoto" alt="photos">
      <div @click="$emit('likee')" class="w-[36px] absolute cursor-pointer mt-[-36px] ml-[223px] h-[36px] bg-white">
        <img v-show="!product.isLiked" class="absolute mt-[11px] ml-[11px] w-[13px] h-[13px] rotate-45 " src="../assets/brotherPhotos/heart.svg" alt="heart">
        <img v-show="product.isLiked" class="absolute mt-[11.8px] ml-[10.5px] w-[14px] h-[14px] " src="../assets/brotherPhotos/heart2.png" alt="heart2">
      </div>
      <p>{{product.productName}}</p>
      <div class="flex gap-[60px]">
        <p>{{product.productTitle}}</p>
        <p>$ {{ product.productMoney * product.productData }}</p>
      </div>
    </div>
    <div>
      <img class="w-[12px] ml-1 h-[12px] mb-[60px]" src="../assets/brotherPhotos/exit.svg" alt="exit">
      <p class="font-[500] text-[14px] mb-[15px]">L</p>
      <div class="w-[27px] h-[27px] mb-[15px] bg-[#1B1B1D]"></div>
      <button @click="$emit('plus')" class="w-[27px] h-[27px] border text-[17px] border-[#8A8A8A]">+</button>
      <p class="w-[27px] h-[27px] border border-[#8A8A8A] font-[500] text-center text-[15px]">{{product.productData}}</p>
      <button @click="$emit('minus')" class="w-[27px] h-[27px] border text-[17px] mb-[25px] border-[#8A8A8A]">-</button>
      <img class="ml-1" src="../assets/brotherPhotos/replace.svg" alt="replace">
    </div>
  </div>
</template>
<script setup>
let props = defineProps({
  product: {}
})
let emit = defineEmits(["plus","minus","likee"])
</script>
