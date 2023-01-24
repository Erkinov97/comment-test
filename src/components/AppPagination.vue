<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { useCommentStore } from "../stores/comment";
const store = useCommentStore();
const data = reactive({
  limit: 10,
  page: 1,
});
const totalPage = ref("");
onMounted(async () => {
  await store.fetchComments(data);
  totalPage.value = await store.getTotal;
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
    console.log(n, " value changed");
  }
);
</script>
<template>
  <ul class="page_wrapper">
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
<style>
.page_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  list-style: none;
}
button {
  border-radius: 8px;
  background-color: transparent;
  margin-left: 5px;
}
button,
.page {
  border: 1px solid black;
  padding: 10px;
  cursor: pointer;
}
.current-page {
  border: 2px solid teal;
}
button:hover {
  box-shadow: 0 0 4px rgba(3, 3, 3, 0.8);
  opacity: 0.9;
}
</style>
