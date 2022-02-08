import Vue from "vue";
import App from "./App.vue";
import editor from "@tinymce/tinymce-vue";

import "tinymce/tinymce";
import "tinymce/plugins/visualblocks";
import "tinymce/themes/silver";

Vue.config.productionTip = false;

Vue.component("tinymce-editor", editor);

new Vue({
  render: h => h(App)
}).$mount("#app");
