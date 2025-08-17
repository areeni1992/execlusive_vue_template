<script setup>
import TitleHeader from "./TitleHeader.vue";
import Countdown from "./Countdown.vue";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
  },
  title: {
    type: String,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <!-- title header -->
  <title-header>
    <template #subtitle>{{ props.subtitle }}</template>
    <template #title>{{ props.title }}</template>
    <template #countdown>
      <Countdown class="ml-25" v-show="props.disable" />
    </template>
  </title-header>
  <div class="grid grid-cols-4 gap-4 mx-auto my-15 mb-10 max-w-7xl">
    <div
      class="box col-span-2 row-span-2 h-150 bg-contain overflow-hidden bg-black hover:shadow-amber-100 bg-center relative"
      style="
        background-image: url('/images/products/ps5-slim.png');
        background-repeat: no-repeat;
      "
    >
      <div class="text text-white p-10 absolute bottom-0 left-0">
        <h4 class="font-bold text-3xl tracking-wider">PlayStation 5</h4>
        <p class="my-3">
          Black and White version of the PS5 coming out on sale.
        </p>
        <a
          href="#"
          class="border-b hover:border-b-amber-600 hover:pb-0.5 transform-border transition-all"
          >Shop Now</a
        >
      </div>
    </div>
    <div
      class="box col-span-2 overflow-hidden bg-black bg-right relative"
      style="
        background-image: url('/images/products/attractive-woman.png');
        background-size: auto;
        background-repeat: no-repeat;
      "
    >
      <div class="text text-white p-10 absolute bottom-0 left-0">
        <h4 class="font-bold text-2xl tracking-wider">Women’s Collections</h4>
        <p class="my-2">
          Featured woman collections that give you another vibe.
        </p>
        <a
          href="#"
          class="border-b hover:border-b-amber-600 hover:pb-0.5 transform-border transition-all"
          >Shop Now</a
        >
      </div>
    </div>
    <div
      class="box overflow-hidden bg-black bg-center relative"
      style="
        background-image: url('/images/products/amazon-echo.png');
        background-size: auto;
        background-repeat: no-repeat;
      "
    >
      <div class="text text-white p-10 absolute bottom-0 left-0">
        <h4 class="font-bold text-2xl tracking-wider">Speakers</h4>
        <p class="my-2">Amazon wireless speakers</p>
        <a
          href="#"
          class="border-b hover:border-b-amber-600 hover:pb-0.5 transform-border transition-all"
          >Shop Now</a
        >
      </div>
    </div>
    <div
      class="box overflow-hidden bg-black bg-center relative"
      style="
        background-image: url('/images/products/gucci.png');
        background-size: auto;
        background-repeat: no-repeat;
      "
    >
      <div class="text text-white p-10 absolute bottom-0 left-0">
        <h4 class="font-bold text-2xl tracking-wider">Perfume</h4>
        <p class="my-2">GUCCI INTENSE OUD EDP</p>
        <a
          href="#"
          class="border-b hover:border-b-amber-600 hover:pb-0.5 transform-border transition-all"
          >Shop Now</a
        >
      </div>
    </div>
  </div>
</template>
