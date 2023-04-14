<script setup lang="ts">
    import "98.css";

    const getTime = () => {
        let timeNow = new Date();
        return timeNow.toTimeString().slice(0, 5);
    }
</script>

<template>
    <div class="taskbar">
        <div class="start">
            <img src="start.png" />
            <b> Start </b> 
        </div>
        <div class="sep"></div>
        <div class="time">
            {{getTime()}}
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
        box-shadow: inset -2px -2px #0a0a0a,inset 2px 2px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    }

    .sep {
        box-shadow: inset -2px -2px #808080, inset 2px 2px #dfdfdf;
        width: 1px;
    }

    .start {
        margin: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        font-size: 14px;
        box-shadow: inset -2px -2px #0a0a0a,inset 2px 2px #dfdfdf,inset -2px -2px grey,inset 2px 2px #fff;
    }

    .time {
        margin: 4px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-items: center;
        margin-left: auto;
        font-size: 12px;
        padding: 0.5vw;
        box-shadow: inset -2px -2px #dfdfdf,inset 2px 2px #808080,inset -2px -2px grey,inset 2px 2px #fff;
    }

    .start img {
        width: 1vw;
        height: 1.2vw;
        padding: 5px;
    }

    .start b {
        padding: 5px;
    }
</style>