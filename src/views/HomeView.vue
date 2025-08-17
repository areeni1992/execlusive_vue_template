<script setup>
import Carousel from "@/components/Carousel.vue";
import Aside from "@/components/Aside.vue";
import ProductsSlide from "@/components/ProductsSlide.vue";
import CategoriesSlide from "@/components/CategoriesSlide.vue";
import OfferBanner from "@/components/OfferBanner.vue";
import NewArrival from "@/components/NewArrival.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue";
import { Grid } from "swiper/modules";
import "swiper/css/grid";
const modules = [Grid];
</script>

<template>
  <div>
    <!-- Asid & Carousel -->
    <div class="grid grid-cols-4 gap-9 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Aside />
      <Carousel class="col-span-3" />
    </div>
  </div>

  <!-- Flash Sales Section -->
  <products-slide
    :slides-per-view="4"
    :disable="true"
    :subtitle="'Today\'s'"
    :title="'Flash Sales'"
  />
  \
  <!-- Categories Section -->
  <categories-slide />

  <!-- Best Selling Products -->
  <products-slide
    :slides-per-view="4"
    :disable="false"
    :subtitle="'This Month'"
    :title="'Best Selling Products'"
    class="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
  />

  <!-- Offer Banner Section -->
  <div class="mx-47 px-4 py-8">
    <offer-banner />
  </div>

  <!-- Our Products Section -->
  <products-slide
    :class="'mb-7'"
    :subtitle="'Our Products'"
    :title="'Explore Our Products'"
    :grid="{
      rows: 2,
    }"
    :outermodules="modules"
    :slides-per-view="5"
    :disable="false"
  />

  <!-- New Arrivals Section -->
  <new-arrival :subtitle="'Featured'" :title="'New Arrival'" :disable="false" />

  <!-- Services Section -->
  <div class="max-w-7xl mx-auto my-15">
    <services />
  </div>

  <!-- Footer Section -->
  <Footer />
</template>
