<template>
  <div class="content__container">
    <div class="content__month">{{ month }}月</div>
    <div class="content__text">{{ data.content }}</div>
    <div class="content__items">
      <div class="content__item">
        <template v-if="Object.keys(data).length > 0">
          <div class="content__item__content">{{ data.price }}円</div>
          <div class="content__item__payment__ok">済</div>
        </template>
        <template v-else>
          <div class="content__text">お支払い情報がありません</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      month: ''
    }
  },
  watch: {
    '$route.params.month': {
      immediate: true,
      handler(newValue) {
        console.log(newValue)
        this.month = newValue
      }
    }
  },
  created() {
    console.log(this.$route.params.month)
  }
}
</script>

<style lang="scss" scoped>
.content {
  &__container {
    min-width: 54px;
    min-height: 110px;
    height: calc(100% - 64px);
  }
  &__text {
    font-size: 18px;
    text-decoration: underline;
  }
  &__month {
    font-size: 32px;
    font-weight: bold;
  }
  &__items {
    align-items: center;
    display: flex;
    height: calc(100% - 64px);
    justify-content: center;
  }
  &__item {
    font-size: 32px;
    font-weight: bold;
    display: flex;
    align-items: center;
    &__content {
      padding-right: 8px;
    }
    &__payment__ok {
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 2px red;
      height: 28px;
      transform: rotate(22deg);
      color: red;
      font-size: 18px;
      border-radius: 100%;
      width: 28px;
    }
  }
  border-radius: 24px;
}
</style>
