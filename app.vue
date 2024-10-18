<!-- <template>
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

<script>

</script>

<style scoped>
.page {
  overflow: hidden;

  position: relative;
}

.wrapper {
  max-width: 320px;
  scrollbar-width: none;
  /* position: relative; */
  height: 100vh;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;

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

@media (max-width: 375px) {
  .wrapper {
    max-width: 280px;
  }
}
</style> -->

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.page-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.page-enter-to {
  transform: translateY(0);
  opacity: 1;
}

.page-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.page-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
