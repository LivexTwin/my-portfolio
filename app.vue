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
main {
  overflow: hidden;
}
.container {
  max-width: 350px;
  height: 90dvh;
  overflow: auto;
  /* overflow-y: scroll; */
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
