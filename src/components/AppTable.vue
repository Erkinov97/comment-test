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
          <button class="modal-btn">Open</button>
        </td>
      </tr>
    </template>
  </table>
</template>
<style scoped>
table.table {
  width: 100%;
}
th,
tr {
  background-color: #ccc;
}

.table th,
.table td {
  text-align: left;
  padding: 0.25em;
}

.table tr {
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #fff;
  transition: all 0.3s linear;
}

td.button {
  text-align: right;
  display: flex;
}
button {
  border-radius: 3px;
  border: none;
  margin: 0 0.25em;
  transition: all 0.3s;
}

button:hover {
  box-shadow: 0 0 4px rgba(3, 3, 3, 0.8);
  opacity: 0.9;
}

button.modal-btn {
  background: #6f9;
}

@media screen and (max-width: 800px) {
  table {
    overflow-x: scroll;
  }

  td,
  th {
    padding: 5px;
  }
}
</style>
