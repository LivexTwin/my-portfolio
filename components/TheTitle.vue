<!-- <template>
  <div>
    <h1 id="title">Info</h1>
    <h1 id="title">Work</h1>
    <h1 id="title">contact</h1>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
#title {
  position: absolute;
  bottom: 5%;
  right: 5%;
  transform: rotate(270deg);
  font-family: "VT323", sans-serif;
  font-size: var(--size-2xl);
  color: var(--clr-neutral);
  font-weight: 500;
} 

@media (max-width: 350px) {
  #title {
    opacity: 0;
  }
}
</style> -->
<template>
  <div class="title_wrapper">
    <h1 id="title">{{ pageTitle }}</h1>
  </div>
</template>

<script setup>
// Get the current route
const route = useRoute();

// Map the current route path to the respective title
const pageTitle = computed(() => {
  switch (route.name) {
    case "index": // Home page
      return "Info";
    case "work": // Work page (assuming route name is 'work')
      return "Work";
    case "contact": // Contact page (assuming route name is 'contact')
      return "Contact";
    default:
      return "Info"; // Fallback title
  }
});
</script>

<style scoped>
.title_wrapper {
  position: relative; /* Establish positioning context */
}

#title {
  position: fixed;
  right: calc(var(--pad) * 2);
  bottom: calc(var(--pad) * 2);
  transform: rotate(270deg);
  font-family: "VT323", sans-serif;
  font-size: var(--size-xl);
  color: var(--clr-neutral);
  font-weight: 500;
  width: 22px; /* Set a fixed width */
}

@media (max-width: 350px) {
  #title {
    opacity: 0;
  }
}

/* -----LARGE MQ----- */
@media (min-width: 1024px) {
  #title {
    bottom: 6%;
    right: 3%;
    font-size: var(--size-2xl);
  }
}
</style>
