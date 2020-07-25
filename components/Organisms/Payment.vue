<template>
  <div class="payment">
    <BaseContent />
    <div class="payment__buttons">
      <BaseButton />
      <BaseButton />
    </div>
  </div>
</template>

<script>
import BaseContent from '@/components/Atoms/BaseContent.vue'
import BaseButton from '@/components/Atoms/BaseButton.vue'
export default {
  components: {
    BaseContent,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.payment {
  width: 100%;
  height: calc(100% - 56px);
  background-color: #e0e5ec;
  border-radius: 24px;
  padding: 12px;
  box-shadow: inset 2px 2px 4px rgb(163, 177, 198, 0.6),
    inset -2px -2px 4px rgba(255, 255, 255, 0.5);
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
