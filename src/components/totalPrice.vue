<template>
  <div class=" w-[310px] p-[35px] mt-[40px] mb-[40px] mx-auto border border-gray-200">
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
      <div class="flex gap-[55px] mb-[35px] mt-[20px]">
        <p class="uppercase font-[500] text-[16px] ">Total (Tax incl.)</p>
        <p class="font-[500] text-[16px] ">$ {{price}}</p>
      </div>
      <div class="flex items-center mb-[15px] gap-2">
        <input class="w-[18px] h-[18px]" type="checkbox" name="radio">
        <p class="font-[250] text-[14px] ">I agree to the Terms and Conditions</p>
      </div>
      <button class="uppercase w-[220px] h-[40px] bg-[#D9D9D9] font-[500] text-[13px] text-[#000000]">Continue</button>
    </div>
  </div>
</template>
<script setup>
import {ref} from "vue";

let price = ref(297)
let props = defineProps({
  product: 0,
})
</script>