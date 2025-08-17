<script setup>
import { ref } from "vue";

const activeCategoryId = ref(null);
const chevronIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
const chevronIconOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
const toggleMenu = (id) => {
  activeCategoryId.value = activeCategoryId.value === id ? null : id;
};

const categories = [
  {
    id: 1,
    name: "Woman's Fashion",
    link: "#",
    subcategories: [
      { id: 1, name: "Dresses", link: "#" },
      { id: 2, name: "Tops", link: "#" },
      { id: 3, name: "Skirts", link: "#" },
      { id: 4, name: "Accessories", link: "#" },
    ],
  },
  {
    id: 2,
    name: "Men's Fashion",
    link: "#",
    subcategories: [
      { id: 1, name: "Shirts", link: "#" },
      { id: 2, name: "Pants", link: "#" },
      { id: 3, name: "Jackets", link: "#" },
      { id: 4, name: "Accessories", link: "#" },
    ],
  },
  { id: 3, name: "Electronics", link: "#" },
  { id: 4, name: "Home & Lifestyle", link: "#" },
  { id: 5, name: "Medicine", link: "#" },
  { id: 6, name: "Sports & Outdoor", link: "#" },
  { id: 7, name: "Baby’s & Toys", link: "#" },
  { id: 8, name: "Category 8", link: "#" },
  { id: 9, name: "Groceries & Pets", link: "#" },
  { id: 10, name: "Health & Beauty", link: "#" },
  { id: 11, name: "Books & Stationery", link: "#" },
];
</script>

<template>
  <div class="border-r-1 overflow-auto pt-4">
    <ul class="flex flex-col gap-2 p-3 pl-0">
      <li
        v-for="category in categories"
        :key="category.id"
        @click="toggleMenu(category.id)"
        class="cursor-pointer hover:bg-gray-100 rounded transition-colors"
      >
        <div class="flex flex-row justify-between cursor-pointer">
          <span class="font-">{{ category.name }}</span>
          <span
            v-html="
              activeCategoryId === category.id ? chevronIconOpen : chevronIcon
            "
            v-if="category.subcategories"
            class="inline-block ml-2 text-gray-500"
          ></span>
        </div>
        <ul
          v-if="activeCategoryId === category.id && category.subcategories"
          class="flex flex-col gap-2 pl-4 mt-3 h-auto"
        >
          <li
            v-for="subcategory in category.subcategories"
            :key="subcategory.id"
            class="font-semibold text-gray-700 hover:text-red-500"
          >
            <a :href="subcategory.link">{{ subcategory.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
