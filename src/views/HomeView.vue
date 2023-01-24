<script setup>
import AppTable from "../components/AppTable.vue";
import Pagination from "../components/AppPagination.vue";
import { useCommentStore } from "../stores/comment";
const store = useCommentStore();
</script>

<template>
  <main>
    <AppTable :comments="store.comments" :loading="store.loading" />
  </main>
  <Pagination />
</template>
