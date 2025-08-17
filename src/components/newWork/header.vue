<template>
  <header>
    <div class="bg-[#1B1916]">
      <div class="flex w-[1300px] mx-auto items-center justify-between pt-[10px] pb-[10px]">
        <div class="flex gap-[150px]">
          <img src="../../assets/newCard/logo.svg" alt="logo">
          <div>
            <nav class="flex gap-[15px]">
              <p class="font-[700] text-[17px]">О компании</p>
              <p class="font-[700] text-[17px]">Портфолио</p>
              <p class="font-[700] text-[17px]">Услуги</p>
              <p class="font-[700] text-[17px]">Контакты</p>
            </nav>
          </div>
        </div>
        <div class="flex gap-[40px]">
          <div class="flex items-center gap-[20px] border border-gray-400 mt-2.5 rounded-full w-[63px] h-7 p-1 bg-transparent relative">
            <input type="checkbox" id="modeToggle" class="peer hidden">
            <label for="modeToggle" class="flex items-center justify-center relative z-10 cursor-pointer">
              <img src="../../assets/newCard/sun.svg" alt="sun" class=" ml-[5px] w-5 h-5">
            </label>
            <label for="modeToggle" class="flex items-center  justify-center relative z-10 cursor-pointer">
              <img src="../../assets/newCard/light.svg" alt="light" class="w-5 h-5">
            </label>
            <div class="absolute w-[25px] h-[25px] bg-white rounded-full  transition-all duration-500 peer-checked:translate-x-8 peer-checked:bg-indigo-600"></div>
          </div>
          <div class="mr-[-10px]">
            <p class="font-[700] text-[20px]">+998 90 777-77-77</p>
            <p class="font-[700] text-[14px]">chotatam@gmail.com</p>
          </div>
          <button class="text-white rounded-[7px]  font-[700] text-[16px] px-[20px] pt-[8px] pb-[10px] bg-[#6911AD]">Заказать звонок</button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>

</script>