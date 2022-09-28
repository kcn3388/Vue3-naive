<template>
  <n-result status="404" title="404 服务器娘受不了跑路了" description="你们这样压榨是不人道的" >
    <template #footer>
        <n-popconfirm @positive-click="handlePositiveClick" @negative-click="handleNegativeClick" positive-text="我会善待服务器娘的" negative-text="我觉得不行">
          <template #trigger>
            <n-button type="warning">听个歌转换一下心情吧</n-button>
          </template>
          愿你能善待服务器娘。（PS：996是违法的）
        </n-popconfirm>
    </template>
  </n-result>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from 'naive-ui'

export default defineComponent({
  setup () {
    const message = useMessage();
    return {
      handlePositiveClick () {
        window.open("https://api.kcn3388.club/", "_blank");
      },
      handleNegativeClick () {
        message.error('新的路灯挂件出现了')
      }
    }
  },
});
</script>
