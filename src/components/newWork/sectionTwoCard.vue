<template>
  <main>
    <section>
      <div class="ml-[10px] relative">
        <img class="w-[410px] h-[340px]" :src="newCard.productImg" alt="img">
        <p class="text-black text-center pt-[5px] mt-[-77%] w-[100px] rounded-[10px] h-[35px] bg-white ml-[70%] absolute">{{newCard.productName}}</p>
        <div class="absolute w-[380px] h-[310px] rounded-[5px] top-[15px] left-[16px] inset-0 bg-black/70 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
          <p class="absolute  bottom-[30px] left-[30px] text-lg font-semibold">{{ newCard.productHoverName }}</p>
          <img class="absolute top-0 right-0 text-white" :src="newCard.productHoverImage" alt="">
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
let props = defineProps({
  newCard: {}
})
</script>