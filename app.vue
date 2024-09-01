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
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style>
/* .page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  position: relative;
} */

.wrapper {
  max-width: 350px;
  height: 90dvh;

  overflow-y: auto;
  /* overflow-y: scroll; */
}

/* md */
@media (min-width: 768px) {
  .wrapper {
    max-width: 768px;
  }
}
</style>
