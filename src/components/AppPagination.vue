<script setup>
import { onMounted, reactive, watch } from "vue";
import { useCommentStore } from "../stores/comment";
const store = useCommentStore();
const data = reactive({
  limit: 10,
  page: Number(localStorage.getItem("current_page")),
});
onMounted(async () => {
  await store.fetchComments(data);
  store.limit = data.limit;
  store.page = data.page;
});
function fetchChangedComment() {
  store.fetchComments(data);
}
function changePage(pageNumber) {
  data.page = pageNumber;
  fetchChangedComment();
}
watch(
  () => data.page,
  (n) => {
    store.fetchComments(data);
    localStorage.setItem("current_page", n);
    console.log(n, " value changed");
  }
);
</script>
<template>
  <ul class="pagination">
    <li v-if="data.page !== 1">
      <button type="button" @click="data.page = data.page - 1">Prev</button>
    </li>
    <li v-for="pageNumber in store.getTotal" :key="pageNumber">
      <template
        v-if="
          (data.page - pageNumber < 2 && data.page - pageNumber > -2) ||
          pageNumber === 1 ||
          pageNumber === store.getTotal
        "
      >
        <button
          class="page"
          @click="changePage(pageNumber)"
          :class="{ 'current-page': data.page == pageNumber }"
        >
          {{ pageNumber }}
        </button>
      </template>
      <template
        v-if="
          (data.page !== 3 && data.page - pageNumber == 2) ||
          (data.page !== store.getTotal - 3 && data.page - pageNumber == -2)
        "
      >
        <button>...</button>
      </template>
    </li>
    <li v-if="data.page !== store.getTotal">
      <button type="button" @click="data.page = data.page + 1">Next</button>
    </li>
  </ul>
</template>
