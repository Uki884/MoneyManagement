<template>
  <div class="content__container">
    <div class="content__month">7月</div>
    <div class="content__items">
      <div class="content__item">
        <div class="content__item__content">9,0000円</div>
        <div class="content__item__payment__ok">済</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  &__container {
    min-width: 54px;
    min-height: 110px;
    height: calc(100% - 64px);
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
