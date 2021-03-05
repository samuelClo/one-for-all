<template>
  <div class="container">
    <h1>{{ document.title }}</h1>
    <div id="content">
      <textarea type="text" class="form-control" id="contentTextInput" v-model="formData.content"></textarea>
      <div id="contentTextOutput" v-html="contentParsed">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import marked from 'marked'

export default Vue.extend({
  data() {
    return {
      formData: {
        content: ''
      }
    }
  },
  computed: {
    document () {
      return this.$store.state.document
    },
    contentParsed() {
      const eheh = marked(this.formData.content)
      console.log(eheh)
      return eheh
    }
  },
  mounted() {
    console.log(marked('# Marked in the browser\n\nRendered by **marked**.'));
  },
})
</script>

<style>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
#contentTextInput {
  margin-top: 20px;
  min-width: 40vw;
}
#content {
  display: flex;
}
</style>
