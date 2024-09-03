<template>
  <div class="social-icons">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/LivexTwin"
    >
      <icon size="2em" class="social-icon" name="simple-icons:github"
    /></a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://x.com/livestartwin"
    >
      <icon size="2em" class="social-icon" name="simple-icons:x"
    /></a>

    <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
      <div class="social-icon text-icon">CV</div>
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

.text-icon {
  font-weight: 900;
  display: flex;
  align-items: center;
}

/* -----LARGE MQ----- */
@media (min-width: 1024px) {
  .social-icons {
    left: 1.25%;
  }
}
</style>
