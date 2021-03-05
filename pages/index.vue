<template>
  <div class="container">
    <h1>{{ this.title }}</h1>
    <body id="content">

    </body>
    <button v-on:click="handlePropose">
      Proposer une modification
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapMutations} from 'vuex'

export default Vue.extend({
  data() {
    return {
      title: 'Comment faire pousser des carottes ?'
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('updateDocument', {
        title: this.title
      })
    },
    ...mapMutations({
      updateDocument: 'updateDocument'
    }),
    handlePropose() {
      this.addTodo()
      this.$router.push({
        path: 'proposedModif',
        params: {
          test: 'dsfsdf'
        }
      })
    }
  }
})
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
