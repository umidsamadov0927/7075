<template>
  <div class="flex gap-[15px]">
    <div>
      <img class="w-[265px] h-[314px]" src="../../assets/brotherPhotos/blackBro.png" alt="whiteBro"/>
      <div @click="isLiked = !isLiked" class="w-[36px] absolute cursor-pointer mt-[-36px] ml-[228px] h-[36px] bg-white">
        <img v-show="!isLiked" class="absolute mt-[11px] ml-[11px] w-[13px] h-[13px] rotate-45 " src="../../assets/brotherPhotos/heart.svg" alt="heart">
        <img v-show="isLiked" class="absolute mt-[11.8px] ml-[10.5px] w-[14px] h-[14px] " src="../../assets/brotherPhotos/heart2.png" alt="heart2">
      </div>
      <p class="font-[500] text-[14px] mt-[7px] text-[#000000A8]">Cotton T Shirt</p>
      <div class="flex gap-[65px]">
        <p class="font-[500] text-[16px]">Basic Slim Fit T-Shirt</p>
        <p class="font-[500] text-[16px]">$ {{productPrice}}</p>
      </div>
    </div>
    <div>
      <img class="w-[12px] ml-1 h-[12px] mb-[60px]" src="../../assets/brotherPhotos/exit.svg" alt="exit">
      <p class="font-[500] text-[14px] mb-[15px]">L</p>
      <div class="w-[27px] h-[27px] mb-[15px] bg-[#1B1B1D]"></div>
      <button @click="plus" class="w-[27px] h-[27px] border text-[17px] border-[#8A8A8A]">+</button>
      <p class="w-[27px] h-[27px] border border-[#8A8A8A] font-[500] text-center text-[15px]">{{product}}</p>
      <button @click="minus" class="w-[27px] h-[27px] border text-[17px] mb-[25px] border-[#8A8A8A]">-</button>
      <img class="ml-1" src="../../assets/brotherPhotos/replace.svg" alt="replace">
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

let isLiked = ref(false)
let product = ref(1)
let basePrice = 99
let productPrice = ref(basePrice)
function plus() {
  if (product.value <= 51) {
    product.value++
    productPrice.value = basePrice * product.value
  }
}
function minus() {
  if (product.value >= 1) {
    product.value--
    productPrice.value = basePrice * product.value
  }

}
</script>
