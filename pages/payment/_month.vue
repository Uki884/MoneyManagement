<template>
  <div class="container">
    <div class="main">
      <div class="flex justify-between mb-4">
        <BaseButton @click="previous()" text="前月" width="90" />
        <BaseButton @click="now()" text="今月" width="90" />
        <BaseButton @click="next()" text="次月" width="90" />
      </div>
      <Payment :data="data" />
    </div>
  </div>
</template>

<script>
import Payment from '@/components/Organisms/Payment.vue'
import BaseButton from '@/components/Atoms/BaseButton.vue'

export default {
  components: { Payment, BaseButton },
  data() {
    return {
      data: {},
      month: ''
    }
  },
  watch: {
    '$route.params.month': {
      immediate: true,
      handler(newValue) {
        this.month = newValue
      }
    }
  },
  async created() {
    await this.$axios
      .$get('/api/payment', {
        params: { month: this.month }
      })
      .then((Response) => {
        if (Response.payment.length) {
          const data = Response.payment.map((item) => {
            const payment = {}
            payment.content = item.content
            payment.price = item.price
            payment.month = item.month
            payment.year = item.year
            return payment
          })
          this.data = data[0]
        }
      })
  },
  methods: {
    previous() {
      if (this.month > 1) {
        this.month--
        console.log('発火')
        this.$router.push({ path: `/payment/${this.month}` })
      }
    },
    async now() {
      const now = new Date()
      await this.$router.push(`/payment/${now.getMonth() + 1}`)
    },
    async next() {
      if (this.month < 12) {
        this.month++
        await this.$router.push(`/payment/${this.month}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
