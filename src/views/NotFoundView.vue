<script setup>
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div class="not-found-view flex flex-col space-y-15 items-center justify-center h-screen">
    <h1 class="text-9xl">404 Not Found</h1>
    <p class="text-2xl">Your visited page not found. You may go home page.</p>
    <router-link
      to="/"
      class="bg-red-500 text-white py-5 px-20 rounded hover:bg-black hover:text-white transition duration-300"
      >Back to home page</router-link
    >
  </div>
  <Footer />
</template>
