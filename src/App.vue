<template>
  <div class="w-[1400px] mx-auto">
    <Header/>
    <Tiitle/>
    <div class="flex gap-[80px]">
      <product @totalPrice="updatePrice"/>
      <TotalPrice :price="price"/>
    </div>
  </div>
</template>
<script setup>
import Product from "./components/product.vue";
import Header from "./components/header.vue";

import {ref} from "vue";
import Tiitle from "./components/tiitle.vue";
import TotalPrice from "./components/totalPrice.vue";

let price = ref(297)

function updatePrice(newPrice) {
  price.value = newPrice;
}
</script>