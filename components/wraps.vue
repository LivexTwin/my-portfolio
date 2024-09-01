<template>
  <div class="wraps-container">
    <div class="bg">
      <div class="inner-bg"></div>
      <div id="shopify-logo">
        <img
          src="/public/images/ShopifyExpert_Secondary_Wordmark.svg"
          alt="shopify expert logo"
        />
      </div>
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
  </div>
</template>

<style scoped>
.bg {
  background-image: url(../public/images/sprite.jpg);
  background-repeat: no-repeat;
  opacity: 80%;
  filter: grayscale(96%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  pointer-events: none;
  width: 100%;
  z-index: -1;
}

.inner-bg {
  background: rgba(255, 255, 255);
  position: absolute;
  left: var(--pad);
  right: var(--pad);
  top: var(--pad);
  bottom: var(--pad);
  overflow: hidden;
  flex: 1;
  pointer-events: none;
  z-index: 1;
}

#shopify-logo {
  position: absolute;
  bottom: 7%;
  left: -50px;
  transform: rotate(270deg);
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
