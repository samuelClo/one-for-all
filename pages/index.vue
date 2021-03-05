<template>
  <div class="flex flex-col items-center">
    <h1 class="text-5xl font-medium">{{ this.title }}</h1>
    <Button :onClick="handlePropose">Proposer une modification</Button>
    <div id="content">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mapMutations} from 'vuex'

import Button from "../components/Button.vue";

export default {
  data() {
    return {
      title: 'Comment faire pousser des carottes ?'
    }
  },
  components: {
    Button
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
}
</script>
