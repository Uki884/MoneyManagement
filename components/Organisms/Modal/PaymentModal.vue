<template>
  <BaseModal title="お支払い確認">
    <template slot="content">
      7月のお支払いを完了しますか？
    </template>
    <template slot="footer">
      <BaseButton @click.native="cancel" text="キャンセル" />
      <BaseButton text="登録する" />
    </template>
  </BaseModal>
</template>

<script>
import BaseButton from '@/components/Atoms/BaseButton.vue'
import BaseModal from '@/components/Atoms/BaseModal.vue'
export default {
  components: {
    BaseButton,
    BaseModal
  },
  methods: {
    cancel() {
      this.$store.commit('closeModal')
    }
  }
}
</script>

<style></style>
