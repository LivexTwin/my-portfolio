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
    <main>
      <div class="wrapper">
        <!-- Page content goes here -->
        <NuxtPage />
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
  position: relative;
}

.wrapper {
  max-width: 325px;
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
