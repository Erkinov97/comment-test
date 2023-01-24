<script setup>
import AppTable from "../components/AppTable.vue";
import Pagination from "../components/AppPagination.vue";
import { useCommentStore } from "../stores/comment";
import ModalComponent from "../components/ModalComponent.vue";
import { ref, watch } from "vue";
const store = useCommentStore();
const commentId = ref(undefined);
// store.fetchComment({ id: commentId.value });
const openModal = (id) => {
  commentId.value = id;
  modal.value = true;
};
const closeModal = (params) => {
  modal.value = params;
};
watch(commentId, (newVal) => {
  // console.log(newVal);
  store.fetchComment({ id: newVal });
});

const modal = ref(false);
</script>

<template>
  <main>
    <AppTable
      :comments="store.comments"
      :loading="store.loading"
      @open-modal="openModal"
    />
  </main>
  <Pagination />
  <ModalComponent
    v-if="modal"
    :data="store.comment"
    @close-modal="closeModal"
  />
</template>
