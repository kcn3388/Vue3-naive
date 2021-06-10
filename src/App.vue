<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <div class="errormsg" :url="url" v-if="url == '503'">
              <E503 />
            </div>
            <div class="errormsg" :url="url" v-if="url == '404'">
              <E404 />
            </div>
            <div class="errormsg" :url="url" v-if="url == '403'">
              <E403 />
            </div>
            <div class="errormsg" :url="url" v-if="url == '500'">
              <E500 />
            </div>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script>
import { defineComponent } from "vue";
import E503 from "./views/503.vue";
import E404 from "./views/404.vue";
import E403 from "./views/403.vue";
import E500 from "./views/500.vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  components: {
    E503,
    E404,
    E403,
    E500,
  },
  setup() {
    var url = window.location.href.split("?")[1];
    console.log(url);
    return {
      darkTheme,
      url
    };
  },
});
</script>
<style>
.errormsg {
  margin: 60px;
}
</style>
