<template>
  <header>
    <TheNavigation />
  </header>

  <wraps />
  <main>
    <div class="container">
      <section>
        <slot />
      </section>
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 350px;
  height: 90dvh;
  overflow: auto;
}
</style>
