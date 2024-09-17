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
  max-width: 300px;
  scrollbar-width: none;
  /* margin-bottom: 2rem; */
  height: 100vh;
  padding-bottom: 2rem;
  overflow-y: scroll;
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
</style>
