<template>
  <h1>Hi! I'm <span class="name">Anthony :&#41</span></h1>

  <section class="home">
    <p>
      A junior
      <span class="pop">full-stack developer</span> from Atlanta, Ga.
    </p>
    <span class="line"></span>
    <p class="desc">
      My goal is to work with hundreds of creative individuals and use the
      latest technologies to build
      <span class="pop">stunning</span> and
      <span class="pop">impactful</span> online shops.
    </p>

    <NuxtLink class="btn-1" to="/info">More info..</NuxtLink>
  </section>
</template>

<script setup>

definePageMeta({
  layout: 'home'
})
</script>


<style scoped>
.home {
  font-family: "chakra petch", sans-serif;
  font-weight: 300;
  max-width: 250px;
  padding: var(--pad);
  margin-left: 2rem;
  margin-top: 80%;
}

h1 {
  font-family: "Vt323", sans-serif;
  font-weight: 500;
  position: absolute;
  top: 10%;
  max-width: 100px;
  font-size: 1.8rem;
  left: 15%;
}

.name {
  letter-spacing: 0.1em;
  font-size: inherit;
  color: var(--clr-dark);
}

.pop {
  background-image: linear-gradient(45deg, #2d09e3, #100044);
  -webkit-background-clip: text;
  font-weight: 700;
  font-size: var(--size-lg);
  background-color: var(--clr-primary100);
  -webkit-text-fill-color: transparent;
}

.desc {
  padding-top: 2rem;
}

.btn-1 {
  position: absolute;
  right: calc(var(--pad) * 2);
  bottom: calc(var(--pad) * 2);
}

.btn:hover,
a:hover {
  background: var(--clr-primary200);
  color: white;
  transition: 500ms;
}

a {
  color: var(--clr-neutral);
}

img {
  max-width: 150px;
  margin: 0 auto;
}

/* -----MEDIUM MQ----- */

@media (min-width: 768px) {
  .home {
    font-size: var(--size-xl);
    margin-left: 3rem;
    max-width: 800px;
  }

  .pop {
    font-size: var(--size-xl);
  }

  h1 {
    font-size: var(--size-4xl);
  }

  .btn-1 {
    font-size: var(--size-sm);
    bottom: 50px;
    right: 50px;
  }
}

@media only screen and (max-height: 575.98px) and (orientation: landscape) {
  h1 {
   opacity: 0;
  }

  
}
</style>
