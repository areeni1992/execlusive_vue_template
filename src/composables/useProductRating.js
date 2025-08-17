import { computed, toRef } from "vue";

export function useProductRating(productRef) {
  const rating = computed(() => productRef.value?.rating ?? 0);

  const fullStars = computed(() => Math.floor(rating.value));
  const hasHalfStar = computed(() => rating.value % 1 >= 0.5);
  const emptyStars = computed(
    () => 5 - fullStars.value - (hasHalfStar.value ? 1 : 0)
  );

  const starsArray = computed(() => {
    const stars = [];
    for (let i = 0; i < fullStars.value; i++) stars.push("full");
    if (hasHalfStar.value) stars.push("half");
    for (let i = 0; i < emptyStars.value; i++) stars.push("empty");
    return stars;
  });

  return { starsArray };
}


