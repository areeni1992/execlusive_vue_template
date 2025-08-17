<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="grid grid-cols-2 gap-4 my-20">
    <div class="w-fit">
      <img src="/images/sign-up.png" alt="" width="100%" />
    </div>
    <div class="flex flex-col text-center my-20 px-30 mx-auto w-full">
      <div class="head space-y-7 my-4">
        <h1 class="text-5xl text-left font-normal tracking-wider">Log in to Exclusive</h1>
        <span class="block text-left font-normal"
          >Enter your details below</span
        >
      </div>
      <!-- Sign-up form goes here -->
      <form class="flex flex-col items-left space-y-10 my-8">
        <div class="sm:col-span-4">
          <div class="mt-2">
            <div
              class="flex items-center border border-r-0 border-l-0 border-t-0 border-b-gray-400 bg-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-600"
            >
              <input
                type="mail"
                name="signup-email"
                id="signup-email"
                class="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-[18px] focus:outline-none sm:text-sm/6"
                placeholder="Email Or Phone Number"
              />
            </div>
          </div>
        </div>

        <div class="sm:col-span-4">
          <div class="mt-2">
            <div
              class="flex items-center border border-r-0 border-l-0 border-t-0 border-b-gray-400 bg-white focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-amber-600"
            >
              <input
                type="password"
                name="password"
                id="password"
                class="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 placeholder:text-[18px] focus:outline-none sm:text-sm/6"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div class="btns grid grid-cols-2 justify-between items-center mt-5">
            <button
              class="bg-red-600 text-white text-[20px] w-45 px-10 py-5 rounded-sm hover:bg-red-800 cursor-pointer"
            >
              Log In
            </button>
            <a href="/login" class="font-bold tracking-wider text-red-600 underline hover:mb-2 transition-all">Forget Password?</a>
        </div>
      </form>
    </div>
  </div>
  <Footer />
</template>
