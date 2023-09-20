<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import About from './components/sections/About.vue';
import Contact from './components/sections/Contact.vue';
import Projects from './components/sections/Projects.vue';
import Skills from './components/sections/Skills.vue';
import { ref } from 'vue';

  var showWindows = [ref(false), ref(false), ref(false), ref(false)];
  var showTaskBars = [ref(false), ref(false), ref(false), ref(false)];

  const icons = [
    {
      image : "desktopIcons/about.png",
      title : "About",
      open : () => { showWindows[0].value = true; showTaskBars[0].value = true; },
      minw : 600,
      cont : About
    },
    {
      image : "desktopIcons/contact.png",
      title : "Contact",
      open : () => { showWindows[1].value = true; showTaskBars[1].value = true; },
      minw : 300,
      cont : Contact
    },
    {
      image : "desktopIcons/projects.png",
      title : "Projects",
      open : () => { showWindows[2].value = true; showTaskBars[2].value = true; },
      minw : 600,
      cont : Projects
    },
    {
      image : "desktopIcons/skills.png",
      title : "Skills",
      open : () => { showWindows[3].value = true; showTaskBars[3].value = true; },
      minw : 300,
      cont : Skills
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

    <Window v-for="(item, index) in icons"
      @close="() => { showWindows[index].value = false; showTaskBars[index].value = false }"
      @hide="() => { showWindows[index].value = false; }" 
      v-show="showWindows[index].value"
      :title="item.title"
      :minw="item.minw">
      <component :is="item.cont" />
    </Window>

    <TaskBar 
      :taskBarWindows="icons"
      :showWindows="showTaskBars"
      @toggle="(n) => { showWindows[n].value = !showWindows[n].value }"/>

</template>

<style scoped>
  .desktopIcons {
    color: white;
    position: absolute;
    display: grid;
    top: 0;
    left: 0;
  }

</style>
