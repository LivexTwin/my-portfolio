<template>
  <div id="footer">&copy; Copyright 2024 Made with ★ Atl</div>
</template>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  left: 5%;
  background: black;
  z-index: 999;
  font-size: 0.3rem;
  color: white;
}

/* ----LARGE MQ---- */

@media (min-width: 1024px) {
  #footer {
    left: 2%;
    font-size: var(--size-xxs);
    bottom: 1%;
  }
}
</style>
