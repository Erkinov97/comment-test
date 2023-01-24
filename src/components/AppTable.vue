<script setup>
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
</script>

<template>
  <table class="table">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Body</th>
      <th>Actions</th>
    </tr>
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
  </table>
</template>
