<template>
  <div class="container"></div>
</template>

<script>
import Payment from '@/components/Organisms/Payment.vue'
import BaseButton from '@/components/Atoms/BaseButton.vue'
export default {
  components: { Payment, BaseButton },
  methods: {}
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.subtitle {
  padding-bottom: 12px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 32px;
  padding-bottom: 80px;
  position: relative;
}

.main {
  border-radius: 24px;
  background-color: #e0e5ec;
  box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
  height: 100%;
  padding: 24px;
  width: 600px;
}
</style>
