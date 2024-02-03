<script setup lang="ts">
    import '98.css';
    import DesktopIcon from '../DesktopIcon.vue';
    import Sep from '../Sep.vue';
    import Swordle from './Projects/Swordle.vue';
    import Website from './Projects/Website.vue';
    import Burble from './Projects/Burble.vue';
    import { ref } from 'vue';
    import Toolbar from '../Toolbar.vue';

    const projects = [
        {
            title : "Swordle",
            name : 'swordle',
            open : () => { changeContent('swordle'); },
            component : Swordle,
        },
        {
            title: "stephflower.tech",
            name : 'website',
            open : () => { changeContent('website'); },
            component : Website,
        },
        {
            title: "Burble",
            name : 'burble',
            open : () => { changeContent('burble'); },
            component : Burble,
        },
    ];

    const currentContent = ref('base');

    function changeContent(newContent: string) { 
        currentContent.value = newContent;
    };

    function back() {
        if (currentContent.value != 'base') {
            currentContent.value = 'base';
        }
    }

</script>

<template>

    <div>
        <Toolbar />
        <fieldset>
            <div class="toolbar">
                <div class="btns">
                    <Sep />
                    <div @click="back()"> <img src="explorer/back.png" /> Back </div>
                    <div> <img src="explorer/forward.png" /> Forward </div>
                    <div> <img src="explorer/up.png" /> Up </div>
                    <Sep />
                    <div> <img src="explorer/cut.png" /> Cut </div>
                    <div> <img src="explorer/copy.png" /> Copy </div>
                    <div> <img src="explorer/paste.png" /> Paste </div>
                    <Sep />
                    <div> <img src="explorer/undo.png" /> Undo </div>
                    <Sep />
                    <div> <img src="explorer/delete.png" /> Delete </div>
                </div>
            </div>
        </fieldset>
        <div v-if="currentContent === 'base'">
            <div class="bg">
                <div class="title">
                    <img src="explorer/hard_disk_drive.png" />
                    <strong style="font-size: 1.7rem; font-family: Arial;">(C:)</strong>
                    <div class="line" />
                    <span> Select an item to view its description. </span>
                </div>
                <div class="folders">
                    <DesktopIcon v-for="item in projects"
                        image="desktopIcons/projects.png"
                        :title="item.title"
                        class="file-item"
                        @open="item.open"
                    />
            </div>
            </div>
        </div>
        <div v-for="project in projects"> 
            <div v-if="currentContent === project.name"> 
                <component :is="project.component" />
            </div>
        </div>
        <div class="status-bar">
            <p class="status-bar-field">20 object(s) (plus 17 hidden)</p>
            <p class="status-bar-field">31.11MB</p>
            <p class="status-bar-field">My Projects</p>
        </div>
    </div>

</template>

<style scoped>

.title {
    display: flex;
    flex-direction: column;
    margin: 30px 10px;
}

.title img {
    max-width: 32px;
    margin-left: 10px;
}

.title strong {
    margin-left: 8px;
}

.title span {
    width: 110px;
    margin: 20px 8px;
}

fieldset {
    padding: 2px;
}

.optn {
    padding-left: 5px;
    padding-right: 5px;
}

.line {
    height: 2px;
    width: 200px;
    background: linear-gradient(to right, #FF3300 25%, #FFCC00 25%, #FFCC00 50%, #66CC33 50%, #66CC33 75%, #0099FF 75%);
}

.btns {
    display: flex;
    flex-direction: row;
}

.btns div {
    display: flex;
    flex-direction: column;
    width: 50px;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0);
}

.btns div:hover {
    border: 1px solid rgb(128, 128, 128);
}

.btns img {
    height: 18px;
    margin: 4px;
    image-rendering: optimizeSpeed;             /* STOP SMOOTHING, GIVE ME SPEED  */
    image-rendering: -moz-crisp-edges;          /* Firefox                        */
    image-rendering: -o-crisp-edges;            /* Opera                          */
    image-rendering: -webkit-optimize-contrast; /* Chrome (and eventually Safari) */
    image-rendering: pixelated;                 /* Universal support since 2021   */
    image-rendering: optimize-contrast;         /* CSS3 Proposed                  */
    -ms-interpolation-mode: nearest-neighbor;   /* IE8+                           */
}

.btns .sep {
    width: 3px !important;
    margin: 0;
    height: 100%;
}

.toolbar {
    display: flex;
    flex-direction: row;
    border-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='5' height='5' fill='gray' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h5v5H0V2h2v1h1V2H0' fill='%23fff'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h4v4H0V1h1v2h2V1H0'/%3E%3C/svg%3E") 2;
}

.bg {
    background-image: url('explorer/explorerbg.png');
    background-size: 300px 100px;
    background-repeat: no-repeat;
    background-color: white;
    display: flex;
    flex-direction: row;
}

.bg .text {
    color: black;
}

.folders {
    display: flex;
    flex-direction: row;
}

.file-item {
    height: min-content;
}

</style>