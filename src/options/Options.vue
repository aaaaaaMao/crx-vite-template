<template>
    <div id="buttonDiv">
    <ColorButton 
      v-for="buttonColor in presetButtonColors"
      :buttonColor="buttonColor"
      ></ColorButton>
    </div>
    <div>
      <p>Choose a different background color!</p>
    </div>
</template>

<script setup lang="ts">
import ColorButton from './components/ColorButton.vue';
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"]
</script>

<script lang="ts">
export default {}
</script>

<style>
</style>