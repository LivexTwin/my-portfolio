<template>
  <header>
    <TheNavigation />
  </header>

  <aside>
    <TheSocial />
  </aside>
  <wraps />
  <main>
    <div class="container">
      <NuxtPage />
    </div>
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<style scoped>
.container {
  max-width: 350px;
  height: 100vh;
  overflow: scroll;
  /* overflow-y: scroll; */
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
