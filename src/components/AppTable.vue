<script setup>
import { ref } from "vue";

const props = defineProps({
  comments: {
    type: [Object, Array],
    default: () => ({
      id: 1,
      name: "Props Name",
      email: "Props example@email.com",
      body: "Props Body Text",
    }),
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["open-modal"]);
function openModal(id) {
  emit("open-modal", id);
}
const sortedbyASC = ref(true);

function sortList(sortBy) {
  if (sortedbyASC.value) {
    // eslint-disable-next-line vue/no-mutating-props
    props.comments.sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
    sortedbyASC.value = false;
  } else {
    // eslint-disable-next-line vue/no-mutating-props
    props.comments.sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 1));
    sortedbyASC.value = true;
  }
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th @click="sortList('name')">Name &#8597;</th>
        <th>Email</th>
        <th @click="sortList('body')">Body &#8597;</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="props.loading">
        <tr>
          <td colspan="5" class="loading">...Load comments ...</td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="post in props.comments" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.email }}</td>
          <td>{{ post.body }}</td>
          <td class="button">
            <button class="modal-btn" @click="openModal(post.id)">Open</button>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
