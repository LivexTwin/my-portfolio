<template>
  <div class="social-icons">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/LivexTwin"
    >
      <icon size="2em" class="social-icon" name="simple-icons:github"
    /></a>
    <a target="_blank" rel="noopener noreferrer" href="https://x.com/LivexTwin">
      <icon size="2em" class="social-icon" name="simple-icons:x"
    /></a>

    <a
      href="https://www.frontendmentor.io/profile/LivexTwin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <icon size="2em" class="social-icon" name="simple-icons:frontendmentor" />
    </a>
  </div>
</template>

<style scoped>
.social-icons {
  position: absolute;
  z-index: 999;
  bottom: 50dvh;
  display: flex;
  flex-direction: column;
  gap: 0.1px;
  left: 1.5%;
}

.social-icon {
  background: white;
  width: 30px;
  height: 40px;
  padding: 4px;
  border: 1px solid var(--clr-neutral);
}

.social-icon {
  color: var(--clr-primary200);
}

.social-icon:hover,
.social-icons:hover {
  background: var(--clr-primary200);
  color: white;
  transition-duration: 500ms;
}

/* -----LARGE MQ----- */
@media (min-width: 1024px) {
  .social-icons {
    left: 1.25%;
  }
}
</style>
