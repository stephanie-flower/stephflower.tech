<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import { ref } from 'vue';

  var showWindow = ref(false);

  const aboutImg = "desktopIcons/about.png"

  const openWindow = (window: string) => {
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
      <DesktopIcon @open="openWindow" :image="aboutImg" />
      <DesktopIcon @open="openWindow" :image="aboutImg" /> 
      <DesktopIcon @open="openWindow" :image="aboutImg" />  
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
