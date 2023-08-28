<script setup lang="ts">
    import "98.css";
    import { reactive, ref } from "vue";
    import StartMenu from "./StartMenu.vue";
    import TaskBarWindow from "./TaskBarWindow.vue";
    import Sep from "./Sep.vue";

    const props = defineProps(['taskBarWindows', 'showWindows']);

    const date = reactive({time: new Date().toTimeString().slice(0, 5)});
    var showStartMenu = ref(false);

    window.setInterval(() => {
        date.time = new Date().toTimeString().slice(0, 5);
    }, 1000);

    const toggleStartMenu = () => {
        showStartMenu.value = !showStartMenu.value;
    }

</script>

<template>
    <StartMenu v-show="showStartMenu" />
    <div class="taskbar">

        <button @click="toggleStartMenu">
            <img src="start.png" />
            <b> Start </b> 
        </button>

        <Sep />
        
        <div class="windows">
            <TaskBarWindow v-for="(item, index) in props.taskBarWindows"
                v-show="props.showWindows[index].value"
                :img="item.image"
                :title="item.title"
                @click="$emit('toggle', index)"/>
        </div>
        
        <div class="time">
            {{date.time}}
        </div>
    </div>
</template>

<style>
    .taskbar {
        background-color: var(--window-grey);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 1.9vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-shadow: inset -2px -2px #0a0a0a,inset 2px 2px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    }

    .taskbar button img {
        height: 2vh;
        margin-right: 5px;
    }

    .taskbar button {
        height: 1.7vw;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 2px;
    }

    .taskbar b {
        font-size: 1rem;
    }
    
    .time {
        margin-left: auto;
        margin-right: 4px;
        margin-top: 4px;
        margin-bottom: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        font-size: 12px;
        padding: 0.3vw;
        box-shadow: inset -2px -2px #dfdfdf,inset 2px 2px #808080,inset -2px -2px grey,inset 2px 2px #fff;
    }

    .start img {
        width: 1.2vw;
        height: 1.2vw;
        padding: 5px;
    }

    .start b {
        padding: 5px;
    }

    .windows {
        display: flex;
        flex-direction: row;
    }
</style>