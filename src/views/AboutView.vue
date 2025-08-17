<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Services from "@/components/Services.vue";
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import Footer from "@/components/Footer.vue";

const modules = [Pagination];
</script>
<template>
  <div class="about">
    <div class="ml-70 my-40">
      <bread-crumbs class="pb-20">
        <span class="text-black">About</span>
      </bread-crumbs>
      <div class="grid grid-cols-2 gap-9">
        <div class="content flex flex-col justify-center">
          <h1 class="text-5xl font-bold tracking-wider mb-8">Our Story</h1>
          <p class="text-gray-800 mb-4 font-semibold">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p class="text-gray-800 font-semibold">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div class="image">
          <img
            src="/images/about_image.png"
            alt="about us"
            class="w-full h-auto rounded"
          />
        </div>
      </div>

      <!-- Our Vision Section -->
      <div class="max-w-7xl grid grid-cols-4 gap-6 my-30">
        <div
          class="box flex flex-col items-center justify-center border border-gray-300 py-10 rounded space-y-2 hover:bg-red-600 hover:text-white transition duration-300"
        >
          <div class="icon">
            <img src="/images/icons/services-about.png" alt="" />
          </div>
          <div class="num text-5xl font-bold">10.5k</div>
          <div class="text">Sallers active our site</div>
        </div>
        <div
          class="box flex flex-col items-center justify-center border border-gray-300 py-10 rounded space-y-2 hover:bg-red-600 hover:text-white transition duration-300"
        >
          <div class="icon">
            <img src="/images/icons/sevices-about_2.png" alt="" />
          </div>
          <div class="num text-5xl font-bold">33k</div>
          <div class="text">Mopnthly Produduct Sale</div>
        </div>
        <div
          class="box flex flex-col items-center justify-center border border-gray-300 py-10 rounded space-y-2 hover:bg-red-600 hover:text-white transition duration-300"
        >
          <div class="icon">
            <img src="/images/icons/services-about_3.png" alt="" />
          </div>
          <div class="num text-5xl font-bold">45.5k</div>
          <div class="text">Customer active in our site</div>
        </div>
        <div
          class="box flex flex-col items-center justify-center border border-gray-300 py-10 rounded space-y-2 hover:bg-red-600 hover:text-white transition duration-300"
        >
          <div class="icon">
            <img src="/images/icons/services-about_4.png" alt="" />
          </div>
          <div class="num text-5xl font-bold">25k</div>
          <div class="text">Anual gross sale in our site</div>
        </div>
      </div>

      <!-- Team -->
      <div class="max-w-7xl">
        <swiper
          class="products-slide my-20"
          :slides-per-view="3"
          :space-between="30"
          :autoplay="true"
          :free-mode="true"
          :navigation="false"
          :pagination="{ clickable: true }"
        >
          <swiper-slide
            class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 space-y-4"
          >
            <div class="image bg-gray-200 p-14 pb-0 rounded">
              <img
                src="/images/tom_cuise.png"
                alt="tom_cuise"
                class="mx-auto"
              />
            </div>
            <h3 class="name text-4xl">Tom Cruise</h3>
            <p class="position">Founder & Chairman</p>
            <div class="social">
              <ul class="flex flex-cols space-x-2 text-gray-500">
                <li>
                  <img src="/images/icons/Icon-Twitter.png" alt="twitter" />
                </li>
                <li><img src="/images/icons/insta.png" alt="insta" /></li>
                <li><img src="/images/icons/linked.png" alt="linked" /></li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 space-y-4"
          >
            <div class="image bg-gray-200 p-14 pb-0 rounded">
              <img
                src="/images/emma_watson.png"
                alt="tom_cuise"
                class="mx-auto"
              />
            </div>
            <h3 class="name text-4xl">Emma Watson</h3>
            <p class="position">Managing Director</p>
            <div class="social">
              <ul class="flex flex-cols space-x-2 text-gray-500">
                <li>
                  <img src="/images/icons/Icon-Twitter.png" alt="twitter" />
                </li>
                <li><img src="/images/icons/insta.png" alt="insta" /></li>
                <li><img src="/images/icons/linked.png" alt="linked" /></li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 space-y-4"
          >
            <div class="image bg-gray-200 p-14 pb-0 rounded">
              <img
                src="/images/tom_cuise.png"
                alt="tom_cuise"
                class="mx-auto"
              />
            </div>
            <h3 class="name text-4xl">Will Smith</h3>
            <p class="position">Product Designer</p>
            <div class="social">
              <ul class="flex flex-cols space-x-2 text-gray-500">
                <li>
                  <img src="/images/icons/Icon-Twitter.png" alt="twitter" />
                </li>
                <li><img src="/images/icons/insta.png" alt="insta" /></li>
                <li><img src="/images/icons/linked.png" alt="linked" /></li>
              </ul>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex-auto h-auto rounded-lg bg-white hover:shadow-lg transition-shadow duration-300 space-y-4"
          >
            <div class="image bg-gray-200 p-14 pb-0 rounded">
              <img
                src="/images/tom_cuise.png"
                alt="tom_cuise"
                class="mx-auto"
              />
            </div>
            <h3 class="name text-4xl">Tom Cruise</h3>
            <p class="position">Founder & Chairman</p>
            <div class="social">
              <ul class="flex flex-cols space-x-2 text-gray-500">
                <li>
                  <img src="/images/icons/Icon-Twitter.png" alt="twitter" />
                </li>
                <li><img src="/images/icons/insta.png" alt="insta" /></li>
                <li><img src="/images/icons/linked.png" alt="linked" /></li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Featuries Section -->
      <Services class="max-w-7xl" />
    </div>
  </div>
  <Footer />
</template>

<style></style>
