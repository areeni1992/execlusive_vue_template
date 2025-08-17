<script setup>
import { ref, onMounted } from "vue";
import Viewer from "viewerjs";
import { Swiper, SwiperSlide } from "swiper/vue";
import {
  EffectFade,
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "viewerjs/dist/viewer.css";

import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";
import DevidedLine from "@/components/DevidedLine.vue";
import TitleHeader from "@/components/TitleHeader.vue";
import SingleProduct from "@/components/SingleProduct.vue";
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
const product = ref({
  images: [
    "/images/products/product_details-0.png",
    "/images/products/product_details-1.png",
    "/images/products/product_details-2.png",
    "/images/products/product_details-3.png",
    "/images/products/product_details-4.png",
  ],
});
const modules = [EffectFade, FreeMode, Navigation, Thumbs, Pagination];
const thumbsSwiper = ref(null);
const galleryRef = ref(null);
const count = ref(1);
const isFavorite = ref(false);

const min = () => {
  count.value--
  if (count.value < 1) {
    count.value = 1;
  }
}
const plus = () => {
  count.value++;
}
onMounted(() => {
  if (galleryRef.value) {
    new Viewer(galleryRef.value, {
      toolbar: true,
      navbar: false,
      title: true,
      tooltip: true,
      transition: true,
    });
  }
});
</script>

<template>
  <bread-crumbs class="max-w-7xl mx-auto my-20">
    <span>Product Details page</span>
  </bread-crumbs>

  <div class="product_images grid grid-cols-5 gap-8 max-w-7xl mx-auto mb-30">
    <div
      class="product-gallery col-span-3 grid grid-cols-3 max-w-4xl gap-4"
      ref="galleryRef"
    >
      <!-- سلايدر الصور المصغرة -->
      <swiper
        v-model:swiper="thumbsSwiper"
        :direction="'vertical'"
        :space-between="10"
        :slides-per-view="4"
        :modules="modules"
        class="thumbs-slider h-[600px] w-full ml-4"
      >
        <swiper-slide
          v-for="(image, index) in product.images"
          :key="'thumb-' + index"
          class="text-center cursor-pointer h-[150px] bg-gray-100 border"
        >
          <img
            :src="image"
            class="w-25 h-fit rounded-md cursor-pointer transition-transform hover:scale-105"
          />
        </swiper-slide>
      </swiper>

      <!-- السلايدر الرئيسي -->
      <swiper
        :direction="'vertical'"
        :loop="true"
        :space-between="10"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="main-slider h-[600px] w-full col-span-2 flex items-center justify-center"
      >
        <swiper-slide
          v-for="(image, index) in product.images"
          :key="index"
          class="bg-gray-100 flex justify-center items-center"
        >
          <img :src="image" class="w-fit h-fit object-cover rounded-lg" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="product_options col-span-2">
      <h2 class="title text-2xl font-bold">Havic HV G-92 Gamepad</h2>
      <div class="price text-[20px] mb-7">$192.00</div>
      <p>
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      <DevidedLine class="" />
      <form action="">
        <div class="space-y-2 flex">
          <span class="text-[20px] mr-4">Colours: </span>
          <label class="flex items-center space-x-2 cursor-pointer m-0 mr-2">
            <input type="radio" name="color" class="peer hidden" />
            <div
              class="w-4 h-4 rounded-sm border border-gray-400 bg-red-500 peer-checked:bg-red-500 peer-checked:border-black"
            ></div>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input type="radio" name="color" class="peer hidden" />
            <div
              class="w-4 h-4 rounded-sm border border-gray-400 bg-green-500 peer-checked:bg-green-500 peer-checked:border-black"
            ></div>
          </label>
        </div>
        <div class="flex space-x-4 mt-3">
          <span class="text-[20px] mr-4">Size: </span>
          <!-- Small -->
          <label class="cursor-pointer">
            <input type="radio" name="size" value="S" class="peer hidden" />
            <div
              class="w-10 h-10 flex items-center justify-center border rounded-sm text-sm font-medium border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 peer-checked:text-white transition-colors"
            >
              S
            </div>
          </label>

          <!-- Medium -->
          <label class="cursor-pointer">
            <input type="radio" name="size" value="M" class="peer hidden" checked />
            <div
              class="w-10 h-10 flex items-center justify-center border rounded-sm text-sm font-medium border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 peer-checked:text-white transition-colors"
            >
              M
            </div>
          </label>

          <!-- Large -->
          <label class="cursor-pointer">
            <input type="radio" name="size" value="L" class="peer hidden" />
            <div
              class="w-10 h-10 flex items-center justify-center border rounded-sm text-sm font-medium border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 peer-checked:text-white transition-colors"
            >
              L
            </div>
          </label>

          <!-- Extra Large -->
          <label class="cursor-pointer">
            <input type="radio" name="size" value="XL" class="peer hidden" />
            <div
              class="w-10 h-10 flex items-center justify-center border rounded-sm text-sm font-medium border-gray-300 peer-checked:border-red-500 peer-checked:bg-red-500 peer-checked:text-white transition-colors"
            >
              XL
            </div>
          </label>
        </div>
        <div class="grid grid-cols-5 mt-4">
          <label for="count" class="flex col-span-2">
            <button type="button" class="border py-3 px-5 rounded-b-sm rounded-br-none text-[20px] active:bg-red-500 active:text-white cursor-pointer" @click="min">-</button>
            <input type="text" name="count" id="count" v-model="count" class="border text-center w-16" value="1" min="1" />
            <button type="button" class="border py-3 px-5  rounded-b-sm rounded-bl-none text-[20px] active:bg-red-500 active:text-white cursor-pointer" @click="plus">+</button>
          </label>
          <button class="bg-red-500 px-10 py-3 col-span-2 text-white rounded-sm cursor-pointer">Buy Now</button>
          <span class="col-span-1 flex items-center justify-center border rounded w-15 ml-4 cursor-pointer" :class="isFavorite ? 'bg-red-500' : 'bg-white'" @click="isFavorite = !isFavorite">
            <img src="/images/icons/favorite.svg" alt="favorite">
          </span>
        </div>
      </form>
      <div class="delivary_options border border-gray-500 mt-5 p-3 rounded-sm">
        <span class="free-delevary flex">
          <img src="/images/icons/delivery.png" alt="delivery" class="inline-block mr-2" />
          <div class="">
            <span class="font-bold">Free Delivery</span>
            <p class="text-sm">Enter your postal code for Delivery Availability</p>
          </div>
        </span>
        <span class="return-policy flex mt-4 border-t border-gray-500 pt-4">
          <img src="/images/icons/return.png" alt="return" class="inline-block mr-2" />
          <div>
            <span class="font-bold">Return Delivery</span>
            <p class="text-sm">Free 30 Days Delivery Returns. Details</p>
          </div>
        </span>
      </div>
    </div>
    </div>
    <div class="related_products max-w-7xl mx-auto my-20">
      <title-header>
      <template #subtitle>Related Item</template>
      </title-header>
        <swiper
      class="products-slide my-20"
      :slides-per-view="4"
      :space-between="30"
      :modules="modules"
      :outermodules="modules"
      :autoplay="true"
      :free-mode="true"
      :navigation="true"
    >
      <swiper-slide
        v-for="product in products"
        :key="product.id"
        class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
      >
        <single-product :product="product" />
      </swiper-slide>
    </swiper>
    </div>
  <Footer />
</template>
<style scoped>
.main-slider .swiper-slide-active,
.thumbs-slider .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide-thumb-active img {
  border: 2px solid #3b82f6; /* Tailwind blue-500 */
  transform: scale(1.05);
}
</style>
