<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<style>
header {
  padding: 10px 1rem;
  border: 1px solid #ccc;
}
nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
