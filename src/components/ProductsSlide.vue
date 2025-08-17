<script setup>
// Import components
import Button from "./ui/button/Button.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import TitleHeader from "./TitleHeader.vue";
import Countdown from "./Countdown.vue";
import SingleProduct from "./SingleProduct.vue";

import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";


const modules = [FreeMode, Autoplay, Navigation];
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
  slidesPerView: {
    type: Number,
  },
  modules: {
    type: [Function, Object],
    required: false,
  },
  outermodules: {
    type: [Function, Object],
    required: false,
  },
  grid: {
    type: Object,
  },
  disable: {
    type: Boolean,
    default: false,
  },
});
const products = [
  {
    id: 1,
    name: "AK-900 Wired Keyboard",
    price: 29.99,
    image: "/images/products/ak-900-01-500x500 1.png",
    rate: 5,
    descount: -10,
    vote: 120,
    rats: 3.5,
    reviews: 192,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 2,
    name: "IPS LCD Gaming Monitor",
    price: 39.99,
    image: "/images/products/screen.png",
    rate: 4.5,
    descount: -25,
    vote: 120,
    rats: 5,
    reviews: 100,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 3,
    name: "HAVIT HV-G92 Gamepad",
    price: 49.99,
    image: "/images/products/g92-2-500x500 1.png",
    rate: 4.5,
    descount: -30,
    sale: 75,
    rats: 4.5,
    reviews: 150,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 4,
    name: "Jr. Zoom Soccer Cleats",
    price: 49.99,
    image: "/images/products/Copa_Sense 1.png",
    rate: 5,
    descount: -25,
    sale: 99,
    rats: 5,
    reviews: 200,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 5,
    name: "S-Series Comfort Chair",
    price: 49.99,
    image: "/images/products/chair.png",
    rate: 5,
    descount: -25,
    sale: 99,
    rats: 3,
    reviews: 80,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 6,
    name: "S-Series Comfort Chair",
    price: 49.99,
    image: "/images/products/chair.png",
    rate: 5,
    descount: -25,
    sale: 99,
    rats: 4,
    reviews: 90,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 7,
    name: "S-Series Comfort Chair",
    price: 49.99,
    image: "/images/products/chair.png",
    rate: 5,
    descount: -25,
    sale: 99,
    rats: 4.5,
    reviews: 110,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
  {
    id: 8,
    name: "S-Series Comfort Chair",
    price: 49.99,
    image: "/images/products/chair.png",
    rate: 5,
    descount: -25,
    sale: 99,
    rats: 5,
    reviews: 130,
    colors: [
      {
        id: "white",
        name: "White",
        classes: "bg-white checked:outline-gray-400",
      },
      {
        id: "gray",
        name: "Gray",
        classes: "bg-gray-200 checked:outline-gray-400",
      },
      {
        id: "black",
        name: "Black",
        classes: "bg-gray-900 checked:outline-gray-900",
      },
    ],
    sizes: [
      { name: "XXS", inStock: true },
      { name: "XS", inStock: true },
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
      { name: "XL", inStock: true },
      { name: "XXL", inStock: true },
      { name: "XXXL", inStock: false },
    ],
  },
];
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
  <swiper
    class="products-slide my-20"
    :slides-per-view="props.slidesPerView"
    :space-between="30"
    :modules="modules"
    :outermodules="props.modules"
    :autoplay="true"
    :free-mode="true"
    :navigation="true"
    :grid="props.grid"
  >
    <swiper-slide
      v-for="product in products"
      :key="product.id"
      :class="props.class"
      class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <single-product :product="product" />
    </swiper-slide>
  </swiper>

  <div class="flex justify-center my-15">
    <Button
      class="text-1xl bg-red-600 text-white px-20 rounded-3 py-6 hover:bg-red-700"
    >
      View All Products
    </Button>
  </div>
</template>

<style scoped>
.products-slide {
  width: 76%;
}
.swiper-button-prev:after {
  content: "←";
  color: #3c3535 !important; /* Tailwind red-500 */
  width: 40px !important;
  height: 40px !important;
  background-color: #f8f8f8 !important; /* Light background for better visibility */
  border-radius: 50% !important;
  font-size: 20px !important;
}
.swiper-button-prev:after {
  content: "→";
  color: #3c3535 !important; /* Tailwind red-500 */
  width: 40px !important;
  height: 40px !important;
  background-color: #f8f8f8 !important; /* Light background for better visibility */
  border-radius: 50% !important;
  font-size: 20px !important;
}
</style>
