<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="account-view max-w-7xl mx-auto my-40">
    <bread-crumbs>
      <span class="text-black">Account</span>
    </bread-crumbs>
    <div class="grid grid-cols-12">
      <aside class="col-span-3">
        <h2 class="text-lg font-bold my-6">Manage My Account</h2>
        <ul class="pl-10 space-y-2.5">
          <li class="text-gray-400 hover:text-red-500">
            <a href="#">My Profile</a>
          </li>
          <li class="text-gray-400 hover:text-red-500">
            <a href="#">Address Book</a>
          </li>
          <li class="text-gray-400 hover:text-red-500">
            <a href="#">My Payment Options</a>
          </li>
        </ul>
        <h2 class="text-lg font-bold my-6">My Orders</h2>
        <ul class="pl-10 space-y-2.5">
          <li class="text-gray-400 hover:text-red-500">
            <a href="#">My Returns</a>
          </li>
          <li class="text-gray-400 hover:text-red-500">
            <a href="#">My Cancellations</a>
          </li>
        </ul>
        <h2 class="text-lg font-bold my-6">My WishList</h2>
      </aside>
      <div class="content col-span-9 bg-white p-15 mt-10 shadow-sm">
        <h2 class="text-lg font-bold mb-6 text-red-500">Edit Your Profile</h2>
        <form class="space-y-4 grid grid-cols-2 gap-5">
          <div>
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
              >First Name</label
            >
            <input
              type="text"
              id="first-name"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-12 pl-4"
              placeholder="Md"
            />
          </div>
          <div>
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
              >Last Name</label
            >
            <input
              type="text"
              id="last-name"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-12 pl-4"
              placeholder="Rimel"
            />
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-12 pl-4"
              placeholder="rimel1111@gmail.com"
            />
          </div>
          <div>
            <label for="address" class="block text-sm font-medium text-gray-700"
              >Address</label
            >
            <input
              type="text"
              id="address"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-12 pl-4"
              placeholder="Kingston, 5236, United State"
            />
          </div>
          <div class="col-span-2">
            <label for="password" class="block text-sm font-medium text-gray-700"
              >Password Changes</label
            >
            <input
              type="password"
              id="password"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-15 pl-4"
              placeholder="Current Passwod"
            />
          </div>
          <div class="col-span-2">
            <input
              type="password"
              id="new-password"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-15 pl-4"
              placeholder="New Passwod"
            />
          </div>
          <div class="col-span-2">
            <input
              type="password"
              id="confirm-password"
              class="mt-1 block w-full border-gray-300 rounded-md bg-gray-100 h-15 pl-4"
              placeholder="Confirm New Passwod"
            />
          </div>

            <div class="col-span-2 grid grid-cols-2 gap-5 items-end">
              <span class="col-span-1">
              </span>
              <span class="flex justify-between">
                <button type="submit" class="text-black font-semibold bg-white border border-gray-100 w-30 py-3 hover:bg-gray-600 hover:text-white cursor-pointer rounded-sm">Cancel</button>
                <button
                type="submit"
                class="col-span-1 w-full ml-3 bg-red-600 text-white py-3 rounded hover:bg-red-800 cursor-pointer"
                >
                Save Changes
                </button>
              </span>
                
            </div>
        </form>
      </div>
    </div>
  </div>
  <Footer />
</template>
