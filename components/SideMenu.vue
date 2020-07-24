<template>
  <div class="sidemenu">
    <div
      v-for="(item, index) in sidemenuList"
      :key="index"
      class="sidemenu__item"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
const sidemenuList = [{ title: '支払いを登録', path: '', icon: '' }]
export default {
  data() {
    return {
      sidemenuList
    }
  }
}
</script>

<style scoped lang="scss">
.sidemenu {
  width: 200px;
  border-radius: 50px;
  background: #f3c053;
  box-shadow: 20px 20px 60px #cfa347, -20px -20px 60px #ffdd5f;
}
</style>
