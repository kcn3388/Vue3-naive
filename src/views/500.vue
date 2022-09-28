<template>
  <n-result
    status="500"
    title="500 服务器娘炸毛了"
    description="你可能需要更关心一点自己的员工"
  >
    <template #footer>
      <n-dropdown @select="handleSelect" trigger="click" :options="options">
        <n-button type="error">点击散财消灾。没钱？那还是听歌吧</n-button>
      </n-dropdown>
    </template>
  </n-result>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useDialog } from "naive-ui";

export default defineComponent({
  setup() {
    const showDropdownRef = ref(false);
    const dialog = useDialog();
    return {
      options: [
        {
          label: "破财消灾",
          key: true,
        },
        {
          label: "没钱，听歌",
          key: false,
        },
      ],
      showDropdown: showDropdownRef,
      handleSelect(key) {
        if (key == true) {
          dialog.error({
            title: "我觉得不行",
            content: "别傻了，你以为你真的有钱吗，还是听歌吧",
            positiveText: "嗯",
            onPositiveClick: () => {
              window.open("https://api.kcn3388.club/", "_blank");
            },
          });
        } else {
          dialog.success({
            title: "我觉得行",
            content: "你也就只能听听歌了",
            positiveText: "嗯",
            onPositiveClick: () => {
              window.open("https://api.kcn3388.club/", "_blank");
            },
          });
        }
      },
    };
  },
});
</script>
