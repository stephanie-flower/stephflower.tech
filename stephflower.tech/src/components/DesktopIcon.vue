
<script setup lang="ts">
    import "98.css";
    import { ref } from "vue";

    const props = defineProps(['image', 'title']);

    const emit = defineEmits(['open']);
    var isActive = ref(false);

    const toggleActive = () => {
        if (isActive.value) {
            emit("open");
        }
        isActive.value = !isActive.value;
    }


</script>

<template>
    <div class="icon"
    :class="{ 'icon-selected': isActive }"
    @click="toggleActive">
        <img :src="image" alt="About Me">
        <div class="text"> {{ title }} </div>
    </div>
</template>

<style>

    .text {
        font-size: 12px;
    }

    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        user-select: none;
    }

    .icon-selected {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        user-select: none;
    }

    .icon-selected .text {
        border: dotted black 1px;
        background-color: #000080;
    }

    .icon-selected img {
        opacity: 60%;
        background-color: #000080;
    }
</style>