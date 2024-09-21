<!-- <template>
  <nav>
    <div class="navbar">
      <ul class="nav-links">
        <li><NuxtLink to="/contact">contact</NuxtLink></li>
        <li><NuxtLink to="/work">work</NuxtLink></li>
        <li><NuxtLink to="/info">info</NuxtLink></li>

        <NuxtLink to="/"> </NuxtLink>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.logo {
  max-width: 90px;
  margin-top: 3px;
}

nav {
  padding-inline: var(--pad);
}

.nav-links {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-evenly;
  padding: var(--pad);
  gap: 1.5rem;
}

.nav-links a {
  color: var(--clr-neutral);
  font-family: "VT323", sans-serif;
  font-size: var(--size-2xl);
  text-decoration: none;
}

.nav-links a:hover {
  /* color: var(--clr-primary200); */
  color: var(--clr-primary200);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}

nav .router-link-active {
  color: var(--clr-primary200);
}

svg:hover path {
  fill: var(--clr-primary200);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}

svg:hover {
  transform: scaleX(0.99);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}
svg.icon .router-link-active path {
  fill: var(--clr-primary200);
}

/* -----LARGE MQ----- */

@media (min-width: 1024px) {
  .nav-links {
    justify-content: end;
  }
}
</style> -->

<template>
  <nav>
    <div class="navbar">
      <ul class="nav-links">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="{ 'router-link-active': isActive(link.to) }"
          >
            <span v-if="isActive(link.to)" class="icon-star">★</span>
            <span v-else class="link-text">{{ link.text }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute();

const links = [
  { to: "/contact", text: "contact" },
  { to: "/work", text: "work" },
  { to: "/info", text: "info" },
  { to: "/", text: "home" },
];

function isActive(path) {
  return route.path === path;
}
</script>

<style scoped>
.logo {
  max-width: 90px;
  margin-top: 3px;
}

.navbar {
  position: fixed;
  right: calc(var(--pad) * 2);
  top: calc(var(--pad) * 2);
}

.nav-links {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 0.5rem;
}

.nav-links a {
  color: var(--clr-neutral);
  font-family: "VT323", sans-serif;
  font-size: var(--size-lg);
  text-decoration: none;
}

.nav-links a:hover {
  /* color: var(--clr-primary200); */
  color: var(--clr-primary200);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}

.icon-star {
  color: var(--clr-primary200);
}

nav .router-link-active {
  color: var(--clr-primary200);
}

svg:hover path {
  fill: var(--clr-primary200);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}

svg:hover {
  transform: scaleX(0.99);
  transition: ease-in-out 0.5s;
  transition-duration: 500ms;
}
svg.icon .router-link-active path {
  fill: var(--clr-primary200);
}

/* -----LARGE MQ----- */

@media (min-width: 1024px) {
  .nav-links {
    justify-content: end;
  }

  .nav-links a {
    font-size: var(--size-2xl);
  }
}

span {
  font-size: inherit;
}
</style>
