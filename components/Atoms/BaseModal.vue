<template>
  <div class="modal__background">
    <div class="modal">
      <div class="modal__title text-center p-2 font-bold">{{ title }}</div>
      <div class="modal__content flex justify-center items-center">
        <slot name="content"></slot>
      </div>
      <div class="modal__footer flex justify-around">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  height: 500px;
  width: 500px;
  border-radius: 24px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  z-index: 999;
  margin: 24px;
  &__title {
    font-size: 18px;
  }
  &__background {
    background-color: #d1d9e6;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate3d(0, 0, 0);
  }
  &__content {
    height: calc(100% - 112px);
  }
}
</style>
