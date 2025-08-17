<script setup>
import Countdown from "./Countdown.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-4 p-15 bg-black">
    <div class="timer">
      <h5 class="text-green-600 font-medium">Categories</h5>
      <p class="text-6xl font-semibold text-white my-10">
        Enhance Your Music Experience
      </p>
      <Countdown class="text-white ml-0 w-100" table="flex flex-col" header="mb-5" />
      <button class="bg-green-400 text-white mt-10 px-10 py-5 rounded">
        Buy Now!
      </button>
    </div>
    <div class="img">
      <img src="/images/products/JBL_BOOMBO.png" alt="" />
    </div>
  </div>
</template>

<style scoped>

</style>
