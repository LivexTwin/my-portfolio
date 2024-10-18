<template>
  <div>
    <section class="home">
      <h1 class="title">Hi! I'm <span class="name">Anthony :&#41;</span></h1>
      <div class="desc-wrapper">
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
      </div>

      <div class="btn-wrapper">
        <NuxtLink class="btn-1" to="/info">More info..</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  font-family: "chakra petch", sans-serif;
  font-weight: 300;
  max-width: 250px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.5rem;
}

h1 {
  font-family: "Vt323", sans-serif;
  font-weight: 500;

  font-size: 1.8rem;
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

.btn-wrapper {
  display: flex;
  justify-content: flex-end;
}

.btn-1 {
  text-align: center;
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

.title {
  opacity: 0;
  transform: translateY(-100px);
  animation: bounceIn 1.2s ease forwards;
  animation-delay: 0.5s; /* Delay to trigger after page transition */
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  60% {
    opacity: 1;
    transform: translateY(10px);
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    opacity: 1; /* Stay fully visible */
    transform: translateY(0);
  }
}

/* -----MEDIUM MQ----- */

@media (min-width: 768px) {
  .home {
    font-size: var(--size-xl);
    margin-left: 3rem;
    max-width: 800px;
    gap: 7rem;
  }

  .pop {
    font-size: var(--size-xl);
  }

  h1 {
    font-size: var(--size-4xl);
  }
}

@media only screen and (max-height: 575.98px) and (orientation: landscape) {
  h1 {
    opacity: 0;
  }
}
</style>
