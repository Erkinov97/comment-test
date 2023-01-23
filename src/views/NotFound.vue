<script setup></script>
<template>
  <div class="notFound">
    <div class="notFound__inner">
      <h1>Page not found</h1>
      <router-link to="/">Go to main page</router-link>
    </div>
  </div>
</template>
<style>
.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
}
.notFound__inner {
  text-align: center;
}
</style>
