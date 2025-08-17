<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper mt-8"
  >
    <swiper-slide>
      <img
        src="@/assets/images/home-images/banner_1.avif"
        width="100%"
        height="100%"
        alt="Slide 1"
      />
    </swiper-slide>
    <swiper-slide
      ><img
        src="@/assets/images/home-images/banner_1.avif"
        width="100%"
        height="100%"
        alt="Slide 1"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="@/assets/images/home-images/banner_1.avif"
        width="100%"
        height="100%"
        alt="Slide 1"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="@/assets/images/home-images/banner_1.avif"
        width="100%"
        height="100%"
        alt="Slide 1"
    /></swiper-slide>
    <swiper-slide
      ><img
        src="@/assets/images/home-images/banner_1.avif"
        width="100%"
        height="100%"
        alt="Slide 1"
    /></swiper-slide>
  </swiper>
</template>
<style>
.mySwiper {
  width: 100%;
  height: 350px;
}
</style>
