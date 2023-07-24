<script setup lang="ts">
    import "98.css";
    import { ref } from 'vue';


</script>

<template>

    <button @click="$emit('toggle')">
        <img src="desktopIcons/about.png" />
        <div class="text"> about </div>
    </button>

</template> 

<style scoped>
    .text {
        color: black;
    }

</style>