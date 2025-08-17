<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import TitleHeader from "./TitleHeader.vue";
import DevidedLine from "./DevidedLine.vue";

import "swiper/css";
const modules = [FreeMode, Navigation];
const categories = [
  {
    id: 1,
    name: "Camera",
    image: "/images/categories/Category-Camera.png",
  },
  {
    id: 2,
    name: "CellPhone",
    image: "/images/categories/Category-CellPhone.png",
  },
  {
    id: 3,
    name: "Computer",
    image: "/images/categories/Category-Computer.png",
  },
  {
    id: 4,
    name: "Gamepad",
    image: "/images/categories/Category-Gamepad.png",
  },
  {
    id: 5,
    name: "headphone",
    image: "/images/categories/Category-Headphone.png",
  },
  {
    id: 6,
    name: "SmartWatch",
    image: "/images/categories/Category-SmartWatch.png",
  },
];
</script>

<template>
  <!-- title header -->
  <title-header>
    <template #subtitle>Categories</template>
    <template #title>Browse By Category </template>
  </title-header>
  <swiper
    class="category-slide"
    :slides-per-view="6"
    :space-between="30"
    :modules="modules"
    :autoplay="true"
    :free-mode="true"
  >
    <swiper-slide
      v-for="(category, index) in categories"
      :key="index"
      class="min-h-auto flex-auto border p-4 rounded-s bg-white shadow hover:shadow-lg hover:bg-red-600 hover:text-white transition-all ease-in-out duration-300"
    >
      <img
        :src="category.image"
        :alt="category.name"
        class="object-cover mx-auto mb-2"
        height="100%"
      />
      <h3 class="text-lg font-semibold my-auto text-center">
        {{ category.name }}
      </h3>
    </swiper-slide>
  </swiper>
  <!-- Devided Line -->
  <devided-line />
</template>

<style scoped>
.category-slide {
  width: 76%;
}
</style>
