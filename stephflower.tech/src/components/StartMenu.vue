<script setup lang="ts">
    import '98.css';
    import StartMenuItem from './StartMenuItem.vue';
</script>

<template>

    <div class="startmenu">
        
        <div class="vertical-title">
            <div class="title-bar-text"> <b>stephflower</b>.tech </div>
        </div>

        <div class="menu-options">
            <StartMenuItem />
            <StartMenuItem />
            <StartMenuItem />
            <StartMenuItem />
        </div>
    </div>

</template>

<style scoped>

    .startmenu {
        display: block;
        background-color: var(--window-grey);
        position: absolute;
        display: flex;
        flex-flow: row nowrap;
        align-items: stretch;
        left: 0;
        bottom: 1.7vw;
        width: 15vw;
        height: 50vh;
    }


    .vertical-title {
        background: linear-gradient(navy,#1084d0);
        width: 45px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
        margin: 2px;
    }

    .vertical-title .title-bar-text {
        font-size: 20px;
        font-weight: 400;
        transform: rotate(-90deg) translateX(50%) translateY(30%);
        transform-origin: center;
    }

    .menu-options {
        display: flex;
        flex-direction: column;
        width: 100%;
    }


</style>