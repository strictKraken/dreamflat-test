<script setup lang="ts">
import type { Book } from "./type";
import { useDate } from "@/utils/useDate";
const { getLocalDate } = useDate();
defineProps<{
  item: Book;
}>();
</script>

<template>
  <a-card :title="item.title" hoverable style="width: 240px">
    <p><b>Genre:</b> {{ item.genre }}</p>
    <p><b>Author:</b> {{ item.author }}</p>
    <p><b>Published:</b>{{ getLocalDate(item.publishedDate) }}</p>
  </a-card>
</template>

<style scoped></style>
