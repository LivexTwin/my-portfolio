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
      <div class="page-content">
        <slot />
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
