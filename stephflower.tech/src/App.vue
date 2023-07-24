<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import { ref } from 'vue';

  var showWindow = ref(false);

  const openWindow = () => {
    showWindow.value = true;
  }

  const hideWindow = () => {
    showWindow.value = false;
  }

  const toggleWindow = () => {
    showWindow.value = !showWindow.value;
  }

</script>

<template>

    <div class="desktopIcons">
      <DesktopIcon @open="openWindow" />
      <DesktopIcon /> 
      <DesktopIcon />  
    </div>

    <Window v-show="showWindow" @close="hideWindow"/>
    <TaskBar @toggle="toggleWindow"/>

</template>

<style scoped>
  .desktopIcons {
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
  }

</style>
