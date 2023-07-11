<script setup lang="ts">
    import "98.css";
    import { defineComponent, ref } from "vue";
    import Vue3DraggableResizable from "vue3-draggable-resizable"



</script>

<template>
    <Vue3DraggableResizable
    :init-w="200"
    :min-w="150"
    :min-h="65"
    :handles="['br']"
    >
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text"> hello world </div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                    <slot> test </slot>
            </div>
        </div>
    </Vue3DraggableResizable>
</template>

<style scoped>
    
</style>
