<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const genres = computed(() => store.state.bookStore.genres);
const valueSelect = ref([]);
const sortType = ref(0);

const optionsSelect = genres.value.map((genre: string) => ({
  value: genre
}));

const handleChange = () => {
  store.commit("setFilter", valueSelect.value);
};

const handleClickSort = () => {
  if (sortType.value === 0) sortType.value = 1;
  if (sortType.value === 1) sortType.value = 2;
  else sortType.value = 1;
  store.commit("setSort", sortType.value);
};
</script>

<template>
  <div class="wrapper">
    <a-select
      v-model:value="valueSelect"
      mode="tags"
      style="width: 100%"
      placeholder="Tags Mode"
      :options="optionsSelect"
      @change="handleChange"
    />
    <a-button @click="handleClickSort">sort</a-button>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 1em;
  gap: 1em;
  display: flex;
}
</style>
