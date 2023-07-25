<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import About from './components/sections/About.vue';
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

  const icons = [
    {
      image : "desktopIcons/about.png",
      title : "About",
      link : () => {showWindow.value = true; console.log("about");}
    },
    {
      image : "desktopIcons/contact.png",
      title : "Contact",
      link : openWindow
    },
    {
      image : "desktopIcons/projects.png",
      title : "Projects",
      link : openWindow
    },
    {
      image : "desktopIcons/skills.png",
      title : "Skills",
      link : openWindow
    }
  ];

</script>

<template>

    <div class="desktopIcons">

      <DesktopIcon v-for="item in icons"
      @open="item.link" 
      :image="item.image" 
      :title="item.title" 
      />

    </div>

    <Window v-show="showWindow" @close="hideWindow">
      <About />
    </Window>
    
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
