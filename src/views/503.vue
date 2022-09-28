<template>
  <n-result status="error" title="503 服务器娘挂了" description="QAQ我吃不下了啦！">
    <template #footer>
      <n-button color="#8a2be2" @click="handleClick">要不要听听歌呢</n-button>
    </template>
  </n-result>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    function handleClick() {
      window.open("https://api.kcn3388.club/", "_blank");
    }
    return {
      handleClick,
    };
  },
});
</script>
