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
      <section>
        <NuxtPage />
      </section>
    </div>
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
  transition-duration: 500ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.container {
  max-width: 350px;
  height: 90dvh;
  overflow: auto;
}

/* md */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
</style>
