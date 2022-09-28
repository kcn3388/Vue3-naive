<template>
  <n-result status="403" title="403 禁止访问" description="马卡洛夫：没有，滚吧">
    <template #footer>
      <n-popover trigger="hover">
        <template #trigger>
          <n-button type="info" @click="handleClick">放轻松</n-button>
        </template>
        <span>反正不放轻松你也做不了什么，来听歌吧</span>
      </n-popover>
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
