<script setup lang="ts">
import Window from './components/Window.vue';
import TaskBar from './components/TaskBar.vue';
import DesktopIcon from './components/DesktopIcon.vue';
import About from './components/sections/About.vue';
import Contact from './components/sections/Contact.vue';
import Projects from './components/sections/Projects.vue';
import Skills from './components/sections/Skills.vue';
import { ref, type Ref } from 'vue';
import BonziBuddy from './components/sections/BonziBuddy.vue';
import MobileVer from './components/MobileVer.vue';
import Minesweeper from './components/apps/Minesweeper.vue';

  export type WindowType = {
    id:    string;
    image: string;
    title: string;
    minw:  number;
    cont:  typeof About;
  }

  const applicationOpenFn = (id: string) => {
    windows[id].value = true;
    taskbars[id].value = true;
  };

  const applicationCloseFn = (id: string, minimise?: boolean) => {
    windows[id].value = false;
    if (!minimise) {
      taskbars[id].value = false;
    }
  };

  const toggleVisibleAppFn = (id: string) => {
    windows[id].value = !windows[id].value;
  };

  const applications: WindowType[] = [
    {
      id :    "about",
      image : "/desktopIcons/about.png",
      title : "About",
      minw :  600,
      cont :  About,
    },
    {
      id :    "contact",
      image : "/desktopIcons/contact.png",
      title : "Contact",
      minw :  800,
      cont :  Contact,
    },
    {
      id :    "project",
      image : "/desktopIcons/projects.png",
      title : "Projects",
      minw :  600,
      cont :  Projects,
    },
    {
      id:     "skills",
      image : "/desktopIcons/skills.png",
      title : "Skills",
      minw :  308,
      cont :  Skills,
    }
  ];

  const windowToShowRef = (windows: WindowType[]) => {
    const keys = windows.map((app: WindowType) => app.id);
    return keys.reduce<Record<string, Ref<boolean>>>((result, key) => {
      result[key] = ref(false);
      return result;
    }, {});
  }

  const windows = windowToShowRef(applications);
  const taskbars = windowToShowRef(applications);
  const startMenuApps: Record<string, Ref<boolean>> = {
    'minesweeper' : ref(false),
  };
  const taskbarStartMenuApps: Record<string, Ref<boolean>> = {
    'minesweeper' : ref(false),
  };

  const bonziBuddy: boolean = false;

  const screenSize = { width: screen.width, height: screen.height };
  //const isMobile = screenSize.width < 1350;
  const isMobile = false; //debug
</script>

<template>

  <div v-if="!isMobile">

    <div class="desktopIcons">

      <DesktopIcon v-for="icon in applications"
        :key="icon.title"
        @open="applicationOpenFn(icon.id)" 
        :image="icon.image" 
        :title="icon.title" 
      />

    </div>

    <Window v-for="app in applications"
      :key="app.id"
      @close="applicationCloseFn(app.id)"
      @hide="applicationCloseFn(app.id, true)" 
      v-show="windows[app.id].value"
      :title="app.title"
      :minw="app.minw">
      <component :is="app.cont" />
    </Window>

    <Window
     v-if="startMenuApps.minesweeper.value"
     :title="'Minesweeper'" 
     @close="() => { startMenuApps['minesweeper'].value = false; taskbarStartMenuApps['minesweeper'].value = false }"
     @open="() => { startMenuApps['minesweeper'].value = true;  taskbarStartMenuApps['minesweeper'].value = true }"
     :minw="310">
      <Minesweeper />   
    </Window>

    <BonziBuddy v-if="bonziBuddy" />

    <TaskBar 
      :taskBarWindows="applications"
      :showWindows="taskbars"
      :showMinesweeper="taskbarStartMenuApps['minesweeper'].value"
      @toggle="toggleVisibleAppFn($event)"
      @minesweeper="() => { startMenuApps['minesweeper'].value = true; taskbarStartMenuApps['minesweeper'].value = true }"
      @toggleMinesweeper="() => { startMenuApps['minesweeper'].value = !startMenuApps['minesweeper'].value }" />

  </div>

  <div v-else>
    <MobileVer />
  </div>

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
