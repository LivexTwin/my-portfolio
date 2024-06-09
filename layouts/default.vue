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
        <slot />
      </section>
    </div>
  </main>
  <footer>
    <TheFooter />
  </footer>
</template>

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
