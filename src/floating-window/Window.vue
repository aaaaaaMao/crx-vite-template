<template>
<div>
  <div id="floating-window"
    v-bind:style='coordStyle'>
    <img id="floating-icon"
      v-bind:src='iconURL'/>
  </div>
</div>
</template>

<script setup lang="ts">
import icon from '../../public/power.png'
const iconURL = chrome.runtime.getURL(icon)
</script>

<script lang="ts">
export default {
  data() {
    return {
      selectedContent: '',
      coord: { x: 0, y: 0 },
      coordStyle: {
        top: '0px',
        left: '0px'
      },
      focusContent: false        
    }
  },
  watch: {
    coord: function () {
      if (!(this as any).focusContent) {
        (this as any).coordStyle.top = `${(this as any).coord.y}px`;
        (this as any).coordStyle.left = `${(this as any).coord.x}px`;
      }
    }
  }
}
</script>

<style scoped>
#floating-window {
  position: absolute;
  align-items: flex-start;
  display: flex;
  z-index: 100;
}

#floating-icon {
  width: 40px;
  height: 40px;
}
</style>
