<script setup>
import { ref, toRefs, computed } from "vue";
import QuickView from "./QuickView.vue";
import { StarIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { useRoute } from "vue-router";
const route = useRoute();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
const { product } = toRefs(props);
const isFavorite = ref(false);
const quickView = ref(false);

const safeRats = computed(() => {
  const val = Number(product.value.rats);
  return Number.isInteger(val) && val >= 0 ? val : Math.floor(val);
});

function changeFavorateStyle() {
  isFavorite.value = !isFavorite.value;
}
function toggleQuickView() {
  quickView.value = !quickView.value;
}
</script>

<template>
  <div class="single-product group grid grid-rows-3 gap-2 h-100">
    <div class="card-header bg-gray-200 row-span-2 relative rounded">
      <button
        v-if="route.path !== '/wishlist'"
        @click="changeFavorateStyle"
        :class="isFavorite ? 'bg-red-600 text-white' : 'text-gray-600 bg-white'"
        class="favorite absolute top-3 right-3 px-2 py-1 flex items-center rounded-full w-10 h-10 font-medium text-gray-600 ring-1 ring-gray-600/10 ring-inset hover:text-amber-700 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </button>
      <button
        v-if="route.path !== '/wishlist'"
        @click="toggleQuickView"
        class="eye absolute top-15 right-3 px-2 py-1 flex items-center rounded-full w-10 h-10 bg-white font-medium text-gray-600 ring-1 ring-gray-600/10 ring-inset hover:text-amber-700 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>
      <button
        v-if="route.path == '/wishlist'"
        class="favorite absolute top-3 right-3 px-2 py-1 flex items-center rounded-full w-10 h-10 font-medium bg-white ring-1 ring-gray-600/10 ring-inset hover:text-amber-700 cursor-pointer"
      >
        <TrashIcon />
      </button>
      <span
        class="inline-flex absolute top-3 left-3 px-3 py-1 items-center rounded-sm bg-red-600 text-xs font-medium text-white ring-1 ring-red-600/10 ring-inset"
        >{{ product.descount }} %</span
      >
      <img
        :src="product.image"
        :alt="product.name"
        class="h-fit w-fit p-10 object-cover mx-auto mb-2"
      />
      <!-- Popover for Add to Cart Button -->
      <div
        class="cart-button absolute left-0 right-0 w-full bottom-[-50px] opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all delay-150 duration-300 ease-in-out"
      >
        <button
          popovertarget="my-popover"
          class="bg-black text-center py-2 rounded-br rounded-bl z-0 text-white w-full cursor-pointer"
        >
          Add To Cart
        </button>
        <div
          popover
          id="my-popover"
          class="opacity-0 starting:open:opacity-0 ..."
        ></div>
      </div>
    </div>
    <div class="card-footer p-2 z-1 row-start-3">
      <h3 class="text-lg font-semibold">
        <router-link :to="`/product/${product.id}`">
          {{ product.name }}
        </router-link>
      </h3>
      <p class="text-gray-600 flex justify-arround items-center">
        <span class="line-through text-sm text-gray-400 mr-4">
          {{ product.price }}</span
        >
        <br />
        <span class="font-bold text-red-600">
          ${{ (product.price * (1 - product.descount / 100)).toFixed(2) }}
        </span>
      </p>
      <div
        v-if="route.path !== '/wishlist'"
        class="flex items-center space-x-1 mt-2"
      >
        <!-- Full stars -->
        <StarIcon
          v-for="n in safeRats"
          :key="'full-' + n"
          class="text-yellow-500 size-5 shrink-0"
          aria-hidden="true"
        />
        <span class="text-sm text-gray-500 ml-1">
          ({{ product.reviews }})
        </span>
      </div>
    </div>
  </div>
  <QuickView
    v-if="product.rats"
    :open="quickView"
    @close="quickView = false"
    :product="product"
  />
</template>
