<template>
  <div class="input__container">
    <input v-model="inputValue" type="text" class="input" />
    {{ caption }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  &__container {
    display: flex;
    align-items: center;
  }
  height: 48px;
  margin: 12px;
  width: 100%;
  border-radius: 0.55rem;
  box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
}
</style>
