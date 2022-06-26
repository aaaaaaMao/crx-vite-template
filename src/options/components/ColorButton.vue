<template>
<button 
  :dataset="{color: buttonColor}"
  :style="{backgroundColor: buttonColor}"
  @click="handleButtonClick"
  ></button>
</template>

<script lang="ts">
export default {
  props: ['buttonColor'],
  methods: {
    handleButtonClick() {
      chrome.storage.sync.set({ color: (this as any).buttonColor });
    }
  }
}
</script>