
<script setup lang="ts">
    import "98.css";
</script>

<template>
    <div class="icon">
        <img src="desktopIcons/about.png" alt="About Me">
        <div class="text"> About </div>
    </div>
</template>

<style>
    .text {
        color: white;
        font-size: 0.8rem;
    }

    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        user-select: none;
    }
</style>