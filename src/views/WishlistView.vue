<script setup>
import { ref, computed } from "vue";
import SingleProduct from "@/components/SingleProduct.vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
const wishlist = ref([
  {
    id: 1,
    name: "Gucci duffle bag",
    image: "/images/products/Light-Gucci-Savoy-medium-duffle-bag.png",
    price: 690,
    descount: -35,
    rats: 4,
    reviews: 12,
  },
  {
    id: 2,
    name: "RGB liquid CPU Cooler",
    image: "/images/products/gammaxx-l240-argb-1-500x500.png",
    price: 690,
    descount: -35,
    rats: 4,
    reviews: 12,
  },
  {
    id: 3,
    name: "GP11 Shooter USB Gamepad",
    image: "/images/products/GP11_PRD3.png",
    price: 690,
    descount: -30,
    rats: 4,
    reviews: 12,
  },
  {
    id: 4,
    name: "Quilted Satin Jacket",
    image: "/images/products/Light-Reversible-quilted-satin-jacket.png",
    price: 690,
    descount: -50,
    rats: 4,
    reviews: 12,
  },
  {
    id: 5,
    name: "Quilted Satin Jacket",
    image: "/images/products/Light-Reversible-quilted-satin-jacket.png",
    price: 690,
    descount: -50,
    rats: 4,
    reviews: 12,
  }
]);
const wishlistLength = computed(() => wishlist.value.length);
</script>

<template v-if="route.path == '/wishtlist'">
  <div class="grid grid-cols-2 justify-between text-2xl max-w-7xl mx-auto mt-40">
    <h3>Wishlist ({{ wishlistLength }})</h3>
    <button
      class="bg-white text-gray-700 border border-gray-400 rounded hover:bg-red-700 hover:text-white font-bold ml-auto py-3 px-20"
    >
      Move All To Bag
    </button>
  </div>
  <div class="wishlist grid grid-cols-4 gap-4 max-w-7xl mx-auto my-50">
    <div v-if="wishlist.length === 0" class="text-center text-gray-500 py-10">
      لا توجد منتجات في قائمة الأمنيات حتى الآن ❤️
    </div>

    <div
      v-else
      class="product"
      v-for="(product, index) in wishlist"
      :key="index"
    >
      <SingleProduct :product="product" />
    </div>
  </div>
</template>
