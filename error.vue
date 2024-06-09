<template>
  <div class="page-content error">
    <p>{{ error.statusCode }}</p>
    <p>Ooops.</p>
    <p>{{ error.message }}</p>
    <button class="btn-1" @click="handleClearError">Go Home...</button>
  </div>
</template>

<script lang="ts" setup>
defineProps(["error"]);

const handleClearError = () => clearError({ redirect: "/" });
</script>

<style scoped>
.error {
  height: 100dvh;
  display: grid;
  place-content: center;
}
</style>
