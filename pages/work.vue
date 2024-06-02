<template>
  <!-- here i was able to reusue this component and pass it to other pages -->

  <div class="page-content work">
    <h1 id="title">Work</h1>
    <p>
      To master the basics of html, css, and javascript, I used a fun resource
      called
      <a target="_blank" href="https://www.frontendmentor.io/"
        >Frontend Mentor,</a
      >
      to build real world projects.
    </p>
    <span>Here are some examples</span>

    <div class="work-grid">
      <div class="work-item">
        <div class="project">
          <img src="/public/images/1.png" alt="project thumbnail" />
          <div class="btn-container">
            <button class="btn-1">view demo</button>
            <button class="btn-1">github</button>
          </div>
        </div>

        <p>
          Case study: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium, voluptatem quidem provident pariatur dolores illo
          suscipit quos maiores deleniti et facilis laborum voluptatibus sit,
          incidunt qui iusto! Ab, eligendi enim!
        </p>
      </div>
      <div class="work-item">
        <img src="/public/images/2.png" alt="project thumbnail" />
        <p></p>
      </div>
      <div class="work-item">
        <img src="/public/images/3.png" alt="project thumbnail" />
        <p></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work {
  font-size: var(--size-xs);
}

a,
a:hover,
a::before,
a::after {
  color: var(--clr-primary200);
}

span {
  margin-top: -1rem;
}

img {
  border-radius: 1.5px;
  width: 100%;
}

img:hover {
  opacity: 40%;
  transition-duration: 500ms;

  transform: scaleY(1.07);
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
  gap: 3rem;
  border: 1px solid purple;
}

.work-item {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid green;
}

.btn-1 {
  max-width: 60px;
}
.btn-container {
  display: flex;
  gap: 2rem;

  justify-content: space-between;
}
</style>
