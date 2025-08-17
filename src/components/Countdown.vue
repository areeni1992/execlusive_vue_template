<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
const props = defineProps({
  table: {
    type: String,
  },
  spans: {
    type: String,
  },
  header: {
    type: String,
  },
  body: {
    type: String,
  },
});
</script>
<template>
  <vue-countdown
    :time="2 * 24 * 60 * 60 * 1000"
    v-slot="{ days, hours, minutes, seconds }"
    class="countdown grid mr-auto gap-2 text-center"
  >
    <table class="table-auto" :class="props.table">
      <thead :class="props.header">
        <tr class="flex justify-between text-center align-middle">
          <th class="text-xs font-semibold text-black-500 px-2">Days</th>
          <th class="text-xs font-semibold text-black-500 px-2">Hours</th>
          <th class="text-xs font-semibold text-black-500 px-2">Minutes</th>
          <th class="text-xs font-semibold text-black-500 px-2">Seconds.</th>
        </tr>
      </thead>
      <tbody :class="props.body">
        <tr class="flex justify-between text-center align-middle">
          <td class="text-3xl font-bold px-2">
            <span :class="props.spans">{{ days }}</span>
            <span class="text-red-500">:</span>
          </td>
          <td class="text-3xl font-bold px-2">
            <span :class="props.spans">{{ hours }}</span>
            <span class="text-red-500">:</span>
          </td>
          <td class="text-3xl font-bold px-2">
            <span :class="props.spans">{{ minutes }}</span>
            <span class="text-red-500">:</span>
          </td>
          <td class="text-3xl font-bold px-2">
            <span :class="props.spans">{{ seconds }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </vue-countdown>
</template>
<style>
.countdown p {
  display: block;
}
</style>
