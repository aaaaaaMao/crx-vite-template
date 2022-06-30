<template>
<div>
  <div id="floating-window"
    v-bind:style='coordStyle'
    v-if='(selectedContent || focusWindow)'>
    <img id="floating-icon"
      v-bind:src='iconURL'
      v-if='!showWindow && !focusWindow && selectedContent'
      @click='clickIcon'/>
    <div id="main-window"
      @mouseover='focusWindow=true'
      @mouseleave='focusWindow=false'
      v-if='showWindow || focusWindow'>
      <div id="bar">
      </div>
      <div style="width: 300px; height: 200px">
        {{selectedContent}}
      </div>
      
    </div>
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
      focusWindow: false,
      showWindow: false    
    }
  },
  watch: {
    coord: function () {
      if (!(this as any).focusWindow) {
        (this as any).coordStyle.top = `${(this as any).coord.y}px`;
        (this as any).coordStyle.left = `${(this as any).coord.x}px`;
      }
    }
  },
  created() {
    document.body.addEventListener('click', () => {
      if (!this.focusWindow && this.showWindow) {
        this.showWindow = false;
        this.selectedContent = '';
      }
    });
  },
  methods: {
    clickIcon() {
      this.showWindow = true
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

#main-window {
  box-shadow: 0 0 4px 2px #b8b8b8;
  margin-left: 10px;
  font-size: 16px;
  background: #FFFFFF;
  min-width: 200px;
  max-width: 400px;
  display: inline-block;
}

#bar {
  height: 25px;
  background: #469F87;
  display: flex;
  justify-content: space-between;
}
</style>
