<script setup lang="ts">
    import "98.css";
    import { defineComponent, ref } from "vue";
    import Vue3DraggableResizable from "vue3-draggable-resizable";

    const props = defineProps(['title', 'minw', 'draggable']);

</script>

<template>
    <Vue3DraggableResizable
    :init-w="200"
    :min-w="props.minw"
    :min-h="65"
    :handles="['br']"
    :draggable="draggable"
    >
        <div class="window">
            <div class="title-bar">
                <div class="title-bar-text"> {{ props.title }} </div>
                <div class="title-bar-controls">
                    <button aria-label="Minimize" @click="$emit('hide')"></button>
                    <button aria-label="Maximize"></button>
                    <button aria-label="Close" @click="$emit('close')"></button>
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
