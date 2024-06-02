<template>
  <div class="bg">
    <div class="inner-bg"></div>
  </div>
  <div class="frame" id="Frame">
    <div class="frame_line frame_line-left"></div>
    <div class="frame_line frame_line-right"></div>
    <div class="frame_line frame_line-top"></div>
    <div class="frame_line frame_line-bottom"></div>
  </div>
  <div class="mask" id="Mask">
    <div class="mask_bottom"></div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url(../public/images/sprite.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 30%;
  filter: grayscale(98%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  z-index: -1;
}

.inner-bg {
  background: rgb(255, 255, 255);
  overflow: hidden;
  position: absolute;
  left: var(--pad);
  right: var(--pad);
  top: var(--pad);
  bottom: var(--pad);

  /* margin: 1.3rem; */
  z-index: 1;
}

/* frame styles */

.frame {
  position: fixed;
  box-shadow: 5px 5px 29px -3px rgb(0 0 0 / 45%);
  left: var(--pad);
  right: var(--pad);
  top: var(--pad);
  bottom: var(--pad);
  pointer-events: none;
}

.frame_line {
  position: absolute;
  background-color: var(--clr-primary200);
  opacity: 5%;
}

.frame_line-left {
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
}

.frame_line-right {
  right: 0;
  top: 0;
  width: 2px;
  height: 100%;
}

.frame_line-top {
  left: 0;
  top: 0;
  width: 100%;
  height: 2px;
}

.frame_line-bottom {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
}

.mask {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.mask_bottom {
  bottom: 0;
}

.mask_top,
.mask_bottom {
  position: absolute;
  left: 0;
  width: 100%;
  height: var(--pad);

  transition-property: background-color;
  backdrop-filter: blur(1.3px);
  opacity: 0.9;
}
</style>
