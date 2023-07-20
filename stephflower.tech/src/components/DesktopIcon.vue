
<script setup lang="ts">
    import "98.css";
    import { ref } from "vue";

    var isActive = ref(false);

    const toggleActive = () => {
        isActive.value = !isActive.value;
    }

</script>

<template>
    <div class="icon"
    :class="{ 'icon-selected': isActive }"
    @click="toggleActive">
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

    .icon-selected {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        user-select: none;
    }

    .icon-selected .text {
        border: dotted black 1px;
        background-color: #000080;
        color: white;
    }
</style>