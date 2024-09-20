<template>
  <section class="page-content contact">
    <h2>Get in touch</h2>
    <p>
      <strong>Available</strong> to start work immediately. Feel reach to reach
      out to me using the following methods.
    </p>
    <div class="contact-card">
      <div class="contact-items">
        <h3>Email</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:anthony@a-is-lt.com"
          >anthony@a-is-lt.com
        </a>
      </div>
      <div class="contact-items">
        <h3>GitHub</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LivexTwin"
          >git/LivexTwin</a
        >
      </div>
      <div class="contact-items">
        <h3>X</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/LiveStarTwin"
          >@livestartwin</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
#title {
  bottom: 7%;
  right: 1.7%;
}

.contact {
  font-size: var(--size-xs);
}

h2 {
  font-family: "chakra petch", sans-serif;
  font-size: var(--size-xl);
}

h3 {
  font-family: "chakra petch", sans-serif;
  font-size: var(--size-base);
}
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

ul {
  margin-top: -1rem;
}

ul li:before {
  content: "★";
  margin: 0 1em;
}

/* -----MEDIUM MQ----- */

@media (min-width: 768px) {
  .contact {
    font-size: var(--size-sm);
  }

  h2 {
    font-size: var(--size-2xl);
  }

  h3 {
    font-size: var(--size-xl);
  }
}

/* -----LARGE MQ----- */
@media (min-width: 1024px) {
  #title {
    bottom: 7.5%;
    right: 2.2%;
  }
}
</style>
