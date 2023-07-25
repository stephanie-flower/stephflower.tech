<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import About from './components/sections/About.vue';
import { ref } from 'vue';

  var showWindow = ref(false);

  var windowTitle = "System Properties";

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
      link : () => { showWindow.value = true; console.log("about"); }
    },
    {
      image : "desktopIcons/contact.png",
      title : "Contact",
      link : () => { showWindow.value = true; console.log("contact"); }
    },
    {
      image : "desktopIcons/projects.png",
      title : "Projects",
      link : () => { showWindow.value = true; console.log("projects"); }
    },
    {
      image : "desktopIcons/skills.png",
      title : "Skills",
      link : () => { showWindow.value = true; console.log("skills"); }
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

    <Window v-show="showWindow" @close="hideWindow" :title="windowTitle">
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
