<script setup>
import { defineProps, defineEmits } from "vue";
defineProps({
  data: {
    type: Object,
    default: () => ({
      postId: "Props postId",
      name: "Props Name",
      email: "Props Name",
      body: "Props Name",
    }),
  },
});
const emit = defineEmits(["close-modal"]);
function closeModal() {
  emit("close-modal", false);
}
</script>
<template>
  <div class="modal" @click="closeModal">
    <div class="modal-content" @click.stop role="dialog">
      <div>
        <button @click="closeModal" class="close-modal">&times;</button>
      </div>
      <div class="content">
        <strong>PostId</strong>
        <p>{{ data.postId }}</p>
      </div>
      <div class="content">
        <strong>Name</strong>
        <p>{{ data.name }}</p>
      </div>
      <div class="content">
        <strong>Email</strong>
        <p>{{ data.email }}</p>
      </div>
      <div class="content">
        <strong>Body</strong>
        <p>{{ data.body }}</p>
      </div>
    </div>
  </div>
</template>
<style>
.modal {
  width: 100%;
  height: 100vh;
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.modal-content {
  max-width: 720px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  padding: 10px;
}
.content {
  margin-top: 1rem;
  margin-bottom: 8px;
}
p {
  margin: 0;
}
.close-modal {
  background: transparent;
  padding: 5px;
  border: none;
  font-size: x-large;
  float: right;
}
</style>
