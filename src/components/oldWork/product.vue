<template>
  <div class="flex  m-4 gap-10 product">
    <div v-for="(product,index) in productData" :key="index">
      <Card @plus="plus(index)" @minus="minus(index)" @likee="toggleLike(index)" :product="product"/>
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

import {productData} from "../../data/cardData.js";
import Card from "./card.vue";

</script>
