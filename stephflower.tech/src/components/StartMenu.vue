<script setup lang="ts">
    import '98.css';
</script>

<template>

    <div class="startmenu">
        
        <div class="vertical-title">
            <img src="menutitle.png" />
        </div>

        <div class="menu-options">
            Start menu
        </div>
    </div>

</template>

<style scoped>

    .startmenu {
        display: block;
        background-color: var(--window-grey);
        position: absolute;
        display: flex;
        flex-direction: row;
        left: 0;
        bottom: 1.7vw;
        width: 15vw;
        height: 50vh;
    }

    .vertical-title .title-bar-text {
        font-weight: 400;
        font-size: 1rem;
        margin: 2px;
        margin-left: 15px;
    }

    .menu-options {
        display: flex;
        flex-direction: column;
    }


</style>