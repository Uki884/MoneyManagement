<template>
  <BaseModal title="お支払い確認">
    <template slot="content">
      <div class="text-center">
        <div>{{ input.month }}月のお支払いを完了しますか？</div>
        <div>相手に支払った金額を入力して下さい</div>
        <BaseInput v-model="input.price" caption="円" />
        <div>何を支払った？あればどうぞ</div>
        <BaseInput v-model="input.content" />
      </div>
    </template>
    <template slot="footer">
      <BaseButton @click.native="cancel" text="キャンセル" />
      <BaseButton @click.native="pay" text="完了する" />
    </template>
  </BaseModal>
</template>

<script>
import BaseButton from '@/components/Atoms/BaseButton.vue'
import BaseModal from '@/components/Atoms/BaseModal.vue'
import BaseInput from '@/components/Atoms/BaseInput.vue'
export default {
  components: {
    BaseButton,
    BaseModal,
    BaseInput
  },
  data() {
    return {
      input: {
        month: '',
        price: '90000',
        content: '家賃',
        year: '2020'
      }
    }
  },
  watch: {
    '$route.params.month': {
      immediate: true,
      handler(newValue) {
        this.input.month = newValue
      }
    }
  },
  methods: {
    cancel() {
      this.$store.commit('closeModal')
    },
    async pay() {
      const payload = {
        ...this.input
      }
      console.log(payload)
      await this.$axios.post(`${window.location.origin}/api/payment`, payload)
      await this.$store.commit('closeModal')
    }
  }
}
</script>

<style></style>
