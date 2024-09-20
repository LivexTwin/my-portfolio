<!-- -->
<template>
  <div id="page">
    <header>
      <TheNavigation />
    </header>
    <TheTitle />
    <aside>
      <TheSocial />
    </aside>
    <wraps />
    <main class="wrapper">
      <div class="inner-wrapper">
        <NuxtPage class="page-content" />
      </div>
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style scoped>
#page {
  overflow: hidden;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.wrapper {
  max-width: 325px;
  min-height: 100%;
}

@media (min-width: 768px) {
  .wrapper {
    max-width: 1000px;
  }
}

@media (max-width: 375px) {
  .wrapper {
    max-width: 280px;
  }
}
</style>
