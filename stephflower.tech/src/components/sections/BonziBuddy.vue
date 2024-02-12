<script setup lang="ts">

import Vue3DraggableResizable from "vue3-draggable-resizable";

</script>

<template>

<Vue3DraggableResizable
    :init-w="200"
    :min-w="200"
    :min-h="65"
    :handles="['br']"
    >
    <img src="Bonzi_buddy.gif" />
</Vue3DraggableResizable>

</template>

<style scoped>

img {
    width: 100%;
}

</style>