<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";

const listItems = [
  {
    id: 1,
    name: "car",
    image:
      "/images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
    price: 120,
    qauntity: 15,
  },
  {
    id: 2,
    name: "Copa Sense",
    image: "/images/products/Copa_Sense 1.png",
    price: 300,
    qauntity: 10,
  },
  {
    id: 3,
    name: "H1 Gamepad",
    image: "/images/products/g92-2-500x500 1.png",
    price: 1500,
    qauntity: 2,
  },
];
const deleteItem = (id) => {
  const index = listItems.findIndex((item) => item.id === id);
  if (index !== -1) {
    listItems.splice(index, 1);
  }
};
</script>

<template>
  <div class="cart max-w-7xl mx-auto my-40">
    <h4 class="mb-20">
      <bread-crumbs>
        <span class="text-black">Cart</span>
      </bread-crumbs>
    </h4>
    <div class="grid grid-rows-2 gap-6 items-center">
      <div
        class="cart-header grid grid-cols-4 gap-6 items-center text-center font-semibold py-6 border border-gray-100 shadow"
      >
        <span>Product</span>
        <span>Price</span>
        <span>Quantit</span>
        <span>Subtotal</span>
      </div>
      <div
        class="cart-item grid grid-cols-4 gap-6 text-center font-semibold py-6 border border-gray-100 shadow-sm align-center overflow-hidden relative"
        v-for="item in listItems"
        :key="item.id"
      >
      <span class="absolute rounded-full w-5 h-5 bg-red-500 text-white left-5 top-4 flex items-center justify-center cursor-pointer" @click="deleteItem(item.id)">x</span>
        <span class="grid grid-cols-2 gap-4 text-center items-center">
          <img :src="item.image" alt="item.name" class="w-20 h-15 mx-auto" />
          {{ item.name }}
        </span>
        <span>{{ item.price }}</span>
        <span>
          <input
            type="number"
            name="quantity"
            id="quantity"
            :value="item.qauntity"
            class="w-15 h-10 border text-center"
          />
        </span>
        <span>
          {{ item.price * item.qauntity }}
        </span>
      </div>
    </div>
    <div class="btns flex justify-between my-15">
      <button class="border border-gray-400 rounded px-20 py-5 hover:bg-red-600 hover:text-white cursor-pointer">
        Return To Shop
      </button>
      <button class="border border-gray-400 rounded px-20 py-5 hover:bg-red-600 hover:text-white cursor-pointer">
        Update Cart
      </button>
    </div>

    <div class="box grid grid-cols-2 gap-30">
      <div class="coupon grid grid-cols-3 gap-4 h-fit">
        <input
          type="text"
          placeholder="Coupon Code"
          class="col-span-2 border border-gray-500 rounded px-4 py-2"
        />
        <button class="bg-red-600 text-white py-5 px-10 rounded hover:bg-red-800 cursor-pointer">
          Apply Coupon
        </button>
      </div>
      <div class="cart_total grid grid-rows-4 border border-black rounded p-10">
        <h2 class="text-2xl font-bold tracking-wide">Cart Total</h2>
        <div class="flex justify-between items-center">
          <div class="font-semibold">Subtotal:</div>
          <div class="text-red-600 font-semibold">3000</div>
        </div>
        <div class="flex justify-between border-b-1 border-t-1 border-gray-400 py-8">
          <div class="font-semibold">Shipping:</div>
          <div class="text-red-600 font-semibold">Free</div>
        </div>
        <div class="flex justify-between mt-8">
          <div class="font-semibold">Total:</div>
          <div class="text-red-600 font-semibold">$1750</div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>
