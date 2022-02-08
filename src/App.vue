<template>
  <tinymce-editor v-model="text" :init="initProps"></tinymce-editor>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "App",
  components: {
    editor: Editor
  },
  data() {
    return {
      text: '<b>hello world</b>',
      initProps: {
        height: "500px",
        plugins: "visualblocks",
        menubar: "view",
        toolbar: "visualblocks",
        visualblocks_default_state: true
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
