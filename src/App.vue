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
          <div class="timeline" :spliturl="spliturl" v-if="spliturl == ''">
            <TimeLine />
          </div>
          <div class="calendar" :url="url" v-if="url == 'c'">
            <Calendar />
          </div>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
  <div class="hokusai">
    <n-image
      width="500"
      src="https://res.kcn3388.club/hexo-theme-obsidian/src/img/default-cover.jpg"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import E503 from "./views/503.vue";
import E404 from "./views/404.vue";
import E403 from "./views/403.vue";
import E500 from "./views/500.vue";
import TimeLine from "./views/timeline.vue";
import Calendar from "./views/calendar.vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  components: {
    E503,
    E404,
    E403,
    E500,
    TimeLine,
    Calendar,
  },
  setup() {
    var realurl = window.location.href.split("/");
    var spliturl = realurl[realurl.length - 1];
    var url = spliturl.split("?")[1];
    return {
      darkTheme,
      url,
      spliturl,
    };
  },
});
</script>
<style>
.errormsg {
  margin: 60px;
}

.timeline {
  width: 500px;
  position: relative;
  margin: 60px auto;
}

.hokusai {
  width: 500px;
  position: relative;
  margin: 30px auto;
  text-align: center;
}

.calendar {
  margin: 60px auto;
  width: 1000px;
}
</style>
