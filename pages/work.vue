<template>
  <section class="page-content work">
    <h1 id="title">Work</h1>
    <div class="work-summary">
      <p>
        To master the basics of html, css, and javascript, I used a fun resource
        called
        <a target="_blank" href="https://www.frontendmentor.io/"
          >"Frontend Mentor",</a
        >
        to build real world projects.
      </p>
      <span>Here are some examples</span>
    </div>

    <div class="work-grid">
      <!-- <div class="work-item">
        <div class="project">
          <img src="/public/images/5.png" alt="project thumbnail" />
          <div class="description">
            <p>
              Highlighting my work with this advanced Shopify development store
              app built using Nuxt 3, Apollo GraphQL, and Insomnia for API
              testing. It also utilizes Pinia for state management and the
              Storefront API. The main challenges included understanding client
              vs server-side requests and effectively managing a cart.
            </p>
            <span>
              Built with Nuxt 3, Apollo GraphQL, Insomnia, Pinia, and Storefront
              API</span
            >
          </div>
          <div class="btn-container">
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vlssh0p.com"
                >view demo</a
              >
            </button>
          </div>
        </div>
      </div> -->
      <div class="work-item">
        <div class="project">
          <NuxtImg src="/images/5.png" alt="project thumbnail" />
          <div class="btn-container">
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vlssh0p.com"
                >view demo</a
              >
            </button>
          </div>
        </div>
        <div class="description">
          <p>
            Highlighting my work with this advanced Shopify development store
            app built using Nuxt 3, Apollo GraphQL, and Insomnia for API
            testing. It also utilizes Pinia for state management and the
            Storefront API. The main challenges included understanding client vs
            server-side requests and effectively managing a cart.
          </p>
          <span>
            Built with Nuxt 3, Apollo GraphQL, Insomnia, Pinia, and Storefront
            API
          </span>
        </div>
      </div>

      <div class="work-item">
        <div class="project">
          <NuxtImg src="/images/4.png" alt="project thumbnail" />
          <div class="btn-container">
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://nuxt-mock-shop.netlify.app/"
                >view demo</a
              >
            </button>
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LivexTwin/nuxt-mock-shop"
                >GitHub</a
              >
            </button>
          </div>
        </div>
        <div class="description">
          <p>
            Built with "Nuxt 3", and "Graphql" for querying products. By far the
            most challenging project I've tried to implement, I learned how
            shopify's storefront API works, how I can use it to fetch real, test
            products. Then how to start a development store in order to generate
            the necessary access keys. Includes a pay button that redirects
            users to shopify's external checkout.
          </p>
        </div>
      </div>

      <div class="work-item">
        <div class="project">
          <NuxtImg src="/images/1.png" alt="project thumbnail" />
          <div class="btn-container">
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://livetwin-ecommerce.netlify.app/"
                >view demo</a
              >
            </button>
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LivexTwin/ecommerce-product-page-main"
                >GitHub</a
              >
            </button>
          </div>
        </div>
        <div class="description">
          <p>
            Case study: I chose to build this mock sneaker app in order to get
            familiar with the functionality of a modern e-commerce website. The
            challenge called for a working lightbox that displays several
            different product images, a cart menu, and an "add to cart" button.
          </p>
          <span> Built with HTML, CSS, and Javascript</span>
        </div>
      </div>

      <div class="work-item">
        <div class="project">
          <NuxtImg src="/images/3.png" alt="project thumbnail" />
          <div class="btn-container">
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://newsletter-sign-up-lt.netlify.app/"
                >view demo</a
              >
            </button>
            <button class="btn-1">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LivexTwin/newsletter-sign-up-with-success-message-main"
                >GitHub</a
              >
            </button>
          </div>
        </div>
        <div class="description">
          <p>
            Case study: Stay updated! This newsletter sign-up page was super
            insightful. I want to build online shops, and a big part of that is
            attracting more users. Although I had a tough time understanding how
            form validation works, I was able to reference MDN docs on how to
            validate emails and display an error message otherwise. Feel free to
            Subscribe!
          </p>
          <span> Built with HTML, CSS, and Javascript</span>
        </div>
      </div>
      <span class="span-1">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io/profile/LivexTwin"
          >Click here to view my Frontend Mentor profile for more projects!</a
        >
      </span>
    </div>
  </section>
</template>

<style scoped>
a,
a:hover,
a::before,
a::after {
  color: var(--clr-primary200);
}

.span-1 {
  font-size: var(--size-md);
  text-decoration: underline;
}

img {
  border-radius: 1.5px;
  width: 100%;
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.work-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  /* border: 1px solid purple; */
}

.work-item {
  display: flex;
  flex-direction: column;

  /* border: 1px solid green; */
}

.project {
  padding-bottom: 1rem;
}

.btn-container {
  display: flex;
  gap: 0.1rem;
  width: 100%;

  justify-content: center;
}

.btn-1 {
  max-width: 80px;
  width: 100%;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

a,
a::before,
a::after {
  color: var(--clr-neutral);
}

/* md */
@media (min-width: 768px) {
  .project {
    gap: 2rem;
  }
  .work-grid {
    gap: 3rem;
    grid-template-columns: 1fr 1fr;
  }

  .work-item {
    gap: 3rem;
  }
  .btn-container {
    gap: 2rem;
  }
}
</style>
