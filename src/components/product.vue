<template>
  <div class="flex  m-4 gap-10 product">
    <div v-for="(product,index) in productData" :key="index">
      <div class="flex gap-4">
        <div>
          <img :src="product.productPhoto" alt="photos">
          <div @click="toggleLike(index)" class="w-[36px] absolute cursor-pointer mt-[-36px] ml-[223px] h-[36px] bg-white">
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
          <button @click="plus(index)" class="w-[27px] h-[27px] border text-[17px] border-[#8A8A8A]">+</button>
          <p class="w-[27px] h-[27px] border border-[#8A8A8A] font-[500] text-center text-[15px]">{{product.productData}}</p>
          <button @click="minus(index)" class="w-[27px] h-[27px] border text-[17px] mb-[25px] border-[#8A8A8A]">-</button>
          <img class="ml-1" src="../assets/brotherPhotos/replace.svg" alt="replace">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

let emit = defineEmits(["totalPrice"]);

function allPrice() {
  const total = productData.value.reduce((sum, item) => {
    return sum + (item.productMoney * item.productData)
  }, 0)
  emit("totalPrice", total)
}


let isLiked = ref(false)

function plus(index) {
  if (productData.value[index].productData < 50) {
    productData.value[index].productData++;
    allPrice()
  }
}

function minus(index) {
  if (productData.value[index].productData > 1) {
    productData.value[index].productData--;
    allPrice()
  }
}
function toggleLike(index) {
  productData.value[index].isLiked = !productData.value[index].isLiked;
}

import img from "../assets/brotherPhotos/blackBro.png"
import img2 from "../assets/brotherPhotos/whiteBro.png"
let productData = ref([
  {
    productPhoto:img2,
    productName:"Cotton T Shirt",
    productTitle:"Full Sleeve Zipper",
    productMoney: 99,
    productData: 1

  },
  {
    productPhoto:img,
    productName:"Cotton T Shirt",
    productTitle:"Basic Slim Fit T-Shirt",
    productMoney: 99,
    productData: 1
  },
  {
    productPhoto:img2,
    productName:"Cotton T Shirt",
    productTitle:"Full Sleeve Zipper",
    productMoney: 99,
    productData: 1
  }
])

</script>
