<template>
  <div>
    <Wraps />
    <aside>
      <TheSocial />
    </aside>
    <header>
      <TheNavigation />
    </header>
    <slot />
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<script lang="ts" setup>
console.log("Using Home Layout");
</script>

<style scoped></style>
