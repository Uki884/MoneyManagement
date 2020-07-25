<template>
  <div class="footer">
    <BaseButton />
    <BaseButton />
    <BaseButton />
    <BaseButton />
  </div>
</template>

<script>
import BaseButton from '@/components/Atoms/BaseButton.vue'
export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  position: absolute;
  bottom: 12px;
  width: 100%;
}
</style>
