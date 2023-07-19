<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
</script>

<template>

    <div class="desktopIcons">
      <DesktopIcon />
      <DesktopIcon /> 
      <DesktopIcon />  
    </div>

    <Window />
    <TaskBar />

</template>

<style scoped>
  .desktopIcons {
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
  }

</style>
