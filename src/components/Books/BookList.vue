<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/stores";
import BookCard from "./BookCard.vue";
const store = useStore();

const books = computed(() => {
  return store.getters.getBooks;
});
</script>

<template>
  <a-flex wrap="wrap" gap="small">
    <BookCard v-for="book in books" :item="book" :key="book.id" />
  </a-flex>
</template>
