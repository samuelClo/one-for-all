<template>
  <button @click="handleCLick" class="md:mt-12 2xl:mt-20 text-white font-medium bg-blue-600 outline-none border-1 border-solid border-blue-600 text-center px-6 py-4 rounded hover:bg-blue-400 transition-all duration-100 ease-in">
    <slot />
  </button>
</template>
<script lang="ts">

export default {
  props: {
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    handleCLick() {
      if (this.onClick)
        this.onClick()
    }
  }
}
</script>
