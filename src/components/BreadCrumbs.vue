<script setup>
const list = [
 'Home',
]
</script>

<template>
    <div class="breadcrumbs">
        <span v-for="item in list" :key="item" class="text-gray-500">{{ item }} / <slot></slot></span>
    </div>
</template>