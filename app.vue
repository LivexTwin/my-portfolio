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
  max-width: 320px;
  scrollbar-width: none;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

/* md */
@media (min-width: 768px) {
  .wrapper {
    max-width: 1000px;
  }

  main {
    display: flex;
    justify-content: center;
  }
}

@media (max-width: 375px) {
  .wrapper {
    max-width: 280px;
  }
}
</style>
