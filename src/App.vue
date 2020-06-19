<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <MonacoEditor
      class="editor"
      :value="fileContent"
      :language="language"
      :diffEditor="diffEditor"
      :theme="theme"
    />
  </div>
</template>

<script>
import MonacoEditor from "vue-monaco";

export default {
  name: "App",
  components: {
    MonacoEditor,
  },
  data() {
    return {
      theme: "vs",
      diffEditor: false,
      themeOptions: [
        { label: "vs", value: "vs" },
        { label: "vs-dark", value: "vs-dark" },
        { label: "hc-black", value: "hc-black" },
        // { label: "ambiance", value: "ambiance" },
        // { label: "eclipse", value: "eclipse" },
        // { label: "darcula", value: "darcula" },
        // { label: "idea", value: "idea" },
        // { label: "material", value: "material" },
        // { label: "yeti", value: "yeti" },
        // { label: "zenburn", value: "zenburn" },
      ],
      languageOptions: [
        { label: "css", value: "css" },
        { label: "html", value: "html" },
        { label: "java", value: "java" },
        { label: "javascript", value: "javascript" },
        { label: "json", value: "json" },
        { label: "python", value: "python" },
        // { label: "css", value: "css" },
        // { label: "html", value: "htmlmixed" },
        // { label: "java", value: "text/x-java" },
        // { label: "javascript", value: "javascript" },
        // { label: "python", value: "python" },
      ],
      fileContent: "var a = 1",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.editor {
  width: 100%;
  height: 500px;
}
</style>
