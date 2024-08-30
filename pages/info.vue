<template>
  <section class="page-content info">
    <h1 id="title">Info</h1>

    <p>
      I'm currently in the early stages of my journey into becoming a full-stack
      web developer. My dream is to launch my career as a frontend developer
      with expertise in the fashion and music industry. Having chosen a
      self-taught path that began in summer 2023, I carefully picked the best
      resources that would help me write clean, concise code.
    </p>

    <span>Below are a handful of technologies I have worked with:</span>
    <div class="point">
      <h2>My Toolkit</h2>
      <icon size="1.5em" color="black" name="ph:toolbox-fill" />
    </div>
    <div class="info-grid">
      <div class="icons">
        <Icon name="simple-icons:graphql" />
        <p>Graphql</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:netlify" />
        <p>Netlify</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:npm" />
        <p>Npm</p>
      </div>

      <div class="icons">
        <Icon name="simple-icons:insomnia" />
        <p>Insomnia</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:vite" />
        <p>Vite</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:visualstudiocode" />
        <p>VS Code</p>
      </div>
    </div>

    <div class="point">
      <h2>Frameworks</h2>
      <icon size="1.5em" color="black" name="material-symbols:code" />
    </div>
    <div class="info-grid">
      <div class="icons">
        <Icon name="simple-icons:alpinedotjs" />
        <p>Alpine JS</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:nuxtdotjs" />
        <p>Nuxt</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:tailwindcss" />
        <p>Tailwind CSS</p>
      </div>
      <div class="icons">
        <Icon name="simple-icons:vuedotjs" />
        <p>Vue JS</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
svg.icon {
  color: var(--clr-primary200);
}
/* .info {
  font-size: var(--size-xs);
} */

h2 {
  font-family: "chakra petch", sans-serif;
  letter-spacing: 1px;
}

.point {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: var(--size-xl);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 0 auto;

  gap: 1.5rem;
}
.info-grid p {
  font-size: var(--size-base);
}
</style>
