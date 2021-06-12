<template>
  <n-calendar @update:value="handleUpdateValue">
    <template #="{ year, month, date }">
      {{ year }}-{{ month }}-{{ date }}
    </template>
  </n-calendar>
</template>

<script>
import { defineComponent } from 'vue'
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage()
    return {
      handleUpdateValue (_, { year, month, date }) {
        message.success(`这天是 ${year}年${month}月${date}日`)
      }
    }
  }
})
</script>