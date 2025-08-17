<script setup>
import { RouterView } from 'vue-router'
import Banner from './components/Banner.vue';
import Header from './components/Header.vue'
</script>

<template class="w-full">
  <Banner />
  <Header class="border-b-1" />
  <RouterView />
</template>

