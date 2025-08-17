<script setup></script>

<template>
  <div class="title-header mx-auto my-15 mb-10 max-w-7xl">
    <p class="subtitle text-red-500 my-7 font-bold">
      <slot name="subtitle"></slot>
    </p>
    <h2 class="title text-4xl font-bold flex items-center justify-between">
      <slot name="title"></slot>
      <slot name="countdown"></slot>
    </h2>
  </div>
</template>

<style lang="css" scoped>
.subtitle {
  position: relative;
  display: inline-block;
  padding-left: 40px;
}
.subtitle::before {
  content: "";
  position: absolute;
  display: block;
  left: 0px;
  bottom: -10px;
  margin-right: 20px;
  width: 25px;
  height: 45px;
  background-color: #d33333; /* Tailwind red-500 */
  border-radius: 7px;
}
</style>
