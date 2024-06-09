<template>
  <div class="page-content info">
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
        <Icon size="3em" name="simple-icons:mongodb" />
        <p>MongoDB</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:netlify" />
        <p>Netlify</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:npm" />
        <p>Npm</p>
      </div>

      <div class="icons">
        <Icon size="3em" name="simple-icons:typescript" />
        <p>Typescript</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:vite" />
        <p>Vite</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:visualstudiocode" />
        <p>VS Code</p>
      </div>
    </div>

    <div class="point">
      <h2>Frameworks</h2>
      <icon size="1.5em" color="black" name="material-symbols:code" />
    </div>
    <div class="info-grid">
      <div class="icons">
        <Icon size="3em" fill="red " name="simple-icons:alpinedotjs" />
        <p>Alpine JS</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:nuxtdotjs" />
        <p>Nuxt</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:tailwindcss" />
        <p>Tailwind CSS</p>
      </div>
      <div class="icons">
        <Icon size="3em" name="simple-icons:vuedotjs" />
        <p>Vue JS</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
svg.icon {
  color: var(--clr-primary200);
}
/* .info {
  font-size: var(--size-xs);
} */

h2 {
  font-family: "chakra patch", sans-serif;
  letter-spacing: 1px;
}

.point {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 0 auto;

  gap: 1.5rem;
}
/* .info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
} */
</style>
