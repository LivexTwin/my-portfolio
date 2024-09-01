<template>
  <div class="page">
    <header>
      <TheNavigation />
    </header>

    <aside>
      <TheSocial />
    </aside>
    <wraps />
    <main>
      <div class="wrapper">
        <NuxtPage />
      </div>
    </main>
  </div>
  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped>
/* .page {
  height: 100vh;
  overflow: hidden;

  position: relative;
} */

.wrapper {
  max-width: 350px;

  /* overflow-y: scroll; */
}

/* md */
@media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
  }
}
</style>
