<template>
  <div class="flex grid grid-cols-4 gap-6 m-6">
    <product-one/>
    <product-two/>
    <product-three/>
    <product-four/>
  </div>
</template>
<script setup>

import ProductOne from "./products/productOne.vue";
import ProductTwo from "./products/productTwo.vue";
import ProductThree from "./products/productThree.vue";
import ProductFour from "./products/productFour.vue";
</script>