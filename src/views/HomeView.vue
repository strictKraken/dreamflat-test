<script setup lang="ts">
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import { BookList, FilterPanel} from "@/components/Books";

onBeforeMount(() => {
  useStore().dispatch("fetchBooks");
});
</script>

<template>
  <main>
    <FilterPanel/>
    <BookList />
  </main>
</template>
