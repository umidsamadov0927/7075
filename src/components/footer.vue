<script setup>

</script>

<template>
  <footer class="bg-gray-800 text-gray-300 fixed bottom-0 left-0 w-full">
    <div class="container mx-auto py-6 px-10 flex justify-between items-center">
      <p>{{ $t("footer_text_one") }}</p>
      <div class="flex gap-4">
        <p class="text-white">{{ $t("footer_text_two") }}</p>
        <p class="text-white">{{ $t("footer_text_three") }}</p>
      </div>
    </div>
  </footer>
</template>
