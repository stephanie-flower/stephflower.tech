<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import About from './components/sections/About.vue';
import Contact from './components/sections/Contact.vue';
import Projects from './components/sections/Projects.vue';
import Skills from './components/sections/Skills.vue';
import { ref } from 'vue';

  var showWindow = ref(false);
  var showWindows = [ref(false), ref(false), ref(false), ref(false)];

  const toggleWindow = () => {
    showWindow.value = !showWindow.value;
  }

  const icons = [
    {
      image : "desktopIcons/about.png",
      title : "About",
      open : () => { showWindows[0].value = true; },
    },
    {
      image : "desktopIcons/contact.png",
      title : "Contact",
      open : () => { showWindows[1].value = true; },
    },
    {
      image : "desktopIcons/projects.png",
      title : "Projects",
      open : () => { showWindows[2].value = true; },
    },
    {
      image : "desktopIcons/skills.png",
      title : "Skills",
      open : () => { showWindows[3].value = true; },
    }
  ];

</script>

<template>

    <div class="desktopIcons">

      <DesktopIcon v-for="item in icons"
      @open="item.open" 
      :image="item.image" 
      :title="item.title" 
      />

    </div>

    <Window
      @close="() => {showWindows[0].value = false;}" 
      v-show="showWindows[0].value"
      :title="'System Properties'"
      :minw="600">
      <About />
    </Window>

    <Window
      @close="() => {showWindows[1].value = false;}" 
      v-show="showWindows[1].value"
      :title="'Contact'"
      :minw="600">
      <Contact />
    </Window>

    <Window
      @close="() => {showWindows[2].value = false;}" 
      v-show="showWindows[2].value"
      :title="'Projects'"
      :minw="600">
      <Projects />
    </Window>

    <Window
      @close="() => {showWindows[3].value = false;}" 
      v-show="showWindows[3].value"
      :title="'Skills'"
      :minw="600">
      <Skills />
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
