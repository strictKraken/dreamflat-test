<script setup lang="ts">
import type { Book } from "./type";

defineProps<{
  item: Book;
}>();
</script>

<template>
  <a-card :title="item.title" hoverable style="width: 240px">
    <p><b>Genre:</b> {{ item.genre }}</p>
    <p><b>Author:</b> {{ item.author }}</p>
    <p><b>Published:</b>{{ item.publishedDate }}</p>
  </a-card>
</template>

<style scoped></style>
