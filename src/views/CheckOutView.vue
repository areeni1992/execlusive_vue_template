<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";
const products = [
  {
    id: 1,
    name: "car",
    image:
      "/images/products/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png",
    price: 120,
    quantity: 15,
  },
  {
    id: 2,
    name: "Copa Sense",
    image: "/images/products/Copa_Sense 1.png",
    price: 300,
    quantity: 10,
  },
];
</script>

<template>
  <div class="checkout-page max-w-7xl mx-auto my-40">
    <bread-crumbs> <span class="font-bold">Checkout</span> </bread-crumbs>
    <h2 class="text-[40px] font-semibold mb-4 my-20 tracking-wide">
      Billing Details
    </h2>
    <div class="grid grid-cols-2 gap-5">
      <div class="checkout-form">
        <form class="space-y-10">
          <div class="mb-4 space-y-3">
            <label
              for="first_name"
              class="block text-sm font-medium text-gray-500"
              >First Name <span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="first_name"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="company" class="block text-sm font-medium text-gray-500"
              >Company Name</label
            >
            <input
              type="text"
              id="company"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="street" class="block text-sm font-medium text-gray-500"
              >Street Address<span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="street"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="address" class="block text-sm font-medium text-gray-500"
              >Apartment, floor, etc. (optional)</label
            >
            <input
              type="text"
              id="address"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label
              for="location"
              class="block text-sm font-medium text-gray-500"
              >Town/City<span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="location"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="phone" class="block text-sm font-medium text-gray-500"
              >Phone Number<span class="text-red-400">*</span></label
            >
            <input
              type="text"
              id="phone"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <div class="mb-4 space-y-3">
            <label for="email" class="block text-sm font-medium text-gray-500"
              >Email Address<span class="text-red-400">*</span></label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full h-12 bg-gray-100 border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>
          <input
            type="checkbox"
            id="check"
            class="w-5 h-5 bg-gray-300 checked:bg-red-500 accent-red-500 hover:border-gray-400 rounded mt-10"
          />
          <label for="check" class="pl-4 font-semibold">
            Save this information for faster check-out next time
          </label>
        </form>
      </div>
      <div class="checkout-summary p-10 pt-0">
        <div class="products px-10">
          <div v-for="(product, index) in products" :key="index">
            <div class="flex justify-between items-center my-4">
              <span class="grid grid-cols-2 gap-4 font-semibold">
                <img
                  :src="product.image"
                  alt="product.name"
                  class="w-20 h-13 mx-auto rounded-lg"
                />
                {{ product.name }}
              </span>
              <span class="text-red-600 font-semibold"
                >${{ product.price }}</span
              >
            </div>
          </div>
        </div>
        <div class="cart_total grid grid-rows-3 px-10">
          <div class="flex justify-between items-center">
            <div class="font-semibold">Subtotal:</div>
            <div class="text-red-600 font-semibold">3000</div>
          </div>
          <div
            class="flex justify-between border-b-1 border-t-1 border-gray-400 py-8"
          >
            <div class="font-semibold">Shipping:</div>
            <div class="text-red-600 font-semibold">Free</div>
          </div>
          <div class="flex justify-between mt-8">
            <div class="font-semibold">Total:</div>
            <div class="text-red-600 font-semibold">$1750</div>
          </div>
        </div>
        <div class="payments-methods p-10 pt-0">
          <ul class="space-y-4">
            <li class="flex items-center">
              <span>
                <input
                  type="radio"
                  name="payments-methods"
                  id="bank"
                  class="w-5 h-5 bg-gray-300 checked:bg-red-500 accent-red-500 hover:border-gray-400 rounded"
                  checked
                />
                <label for="bank" class="pl-4 font-semibold">Bank</label>
              </span>
              <ul class="flex items-center gap-4 ml-auto">
                <li><img src="/images/icons/b-kash.png" alt="kash" /></li>
                <li><img src="/images/icons/visa.png" alt="visa" /></li>
                <li>
                  <img src="/images/icons/mastarcard.png" alt="mastarcard" />
                </li>
                <li>
                  <img src="/images/icons/indiabank.png" alt="indiabank" />
                </li>
              </ul>
            </li>
            <li>
              <span>
                <input
                  type="radio"
                  name="payments-methods"
                  id="cash"
                  class="w-5 h-5 bg-gray-300 checked:bg-red-500 accent-red-500 hover:border-gray-400 rounded"
                />
                <label for="cash" class="pl-4 font-semibold"
                  >Cash on delivery</label
                >
              </span>
            </li>
          </ul>
        </div>
        <div class="coupon grid grid-cols-3 gap-4 px-10 h-fit">
          <input
            type="text"
            placeholder="Coupon Code"
            class="col-span-2 h-15 border border-gray-500 rounded px-4 py-2"
          />
          <button
            class="bg-red-600 text-white rounded hover:bg-red-800 cursor-pointer"
          >
            Apply Coupon
          </button>
        </div>
        <button class="bg-red-600 text-white rounded hover:bg-red-800 cursor-pointer px-20 py-5 mx-10 mt-10">Place Order</button>
      </div>
    </div>
  </div>
  <Footer />
</template>
