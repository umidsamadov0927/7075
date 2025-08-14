<template>
  <div class="w-[1400px] mx-auto">
    <Header/>
    <div class="priceRes">
      <div class="flex items-center ml-[15px] gap-[35px]">
        <p class="uppercase font-[500] text-[15px] text-[#000000] leading-[40px]">Shopping bag</p>
        <div class="w-[38px] h-[35px] bg-[#ededed]">
          <img class="rotate-45 ml-[12px] pt-[10px] w-[20px] h-[22px]" src="./assets/brotherPhotos/heart.svg" alt="hearts">
        </div>
        <p class="uppercase ml-[-30px] font-[400] text-[12px] text-[#8A8A8A] leading-[40px]">favourites</p>
      </div>
      <div class="w-[710px] TotalLine h-[1px] bg-[#C9C9C9] mt-[12px] ml-[15px] mb-[5px]"></div>
    </div>
    <div class="flex gap-[80px]">
      <product @totalPrice="updatePrice"/>
      <div class="p-[35px]  mb-[40px] totalPrice border border-gray-200">
        <div>
          <p class="font-[500] text-[17px] mb-[20px] mt-[10px] ">ORDER SUMMARY</p>
          <div class="flex gap-[145px]">
            <p class="font-[500] text-[14px] ">Subtotal</p>
            <p class="font-[500] text-[14px] ">$180</p>
          </div>
          <div class="flex gap-[145px] mt-[5px] mb-[18px] ">
            <p class="font-[500] text-[14px] ">Shipping</p>
            <p class="font-[500] text-[14px] ">$10</p>
          </div>
          <div class="w-[220px] h-[0.5px] bg-[#D9D9D9]"></div>
          <div class="flex gap-[45px] mb-[35px] mt-[20px]">
            <p class="uppercase font-[500] text-[16px] ">Total (Tax incl.)</p>
            <p class="font-[500] text-[16px]">$ {{price}}</p>
          </div>
          <div class="flex items-center mb-[15px] gap-2">
            <input class="w-[18px] h-[18px]" type="checkbox" name="radio">
            <p class="font-[250] text-[14px] ">I agree to the Terms and Conditions</p>
          </div>
          <button class="uppercase w-[220px] h-[40px] bg-[#D9D9D9] font-[500] text-[13px] text-[#000000]">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Product from "./components/product.vue";
import Header from "./components/header.vue";

import {ref} from "vue";

let price = ref(297)

function updatePrice(newPrice) {
  price.value = newPrice;
}
</script>