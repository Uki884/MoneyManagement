<template>
  <button :style="`width: ${width}px;`" @click="$emit('click')" class="button">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '120'
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  border-radius: 12px;
  height: 50px;
  margin-left: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  outline: none;
  &:active {
    box-shadow: inset 2px 2px 4px rgba(163, 177, 198, 0.6),
      inset -2px -2px 4px rgba(255, 255, 255, 0.5);
  }
}
</style>
