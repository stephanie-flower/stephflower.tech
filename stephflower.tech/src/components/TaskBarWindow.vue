<script setup lang="ts">
    import "98.css";
    import { ref } from 'vue';

    var active = ref(false);

</script>

<template>

    <button @click="$emit('toggle')" v-show="active">
        <img src="desktopIcons/about.png" />
        <div class="text"> about </div>
    </button>

</template> 

<style scoped>
    .text {
        color: black;
    }

</style>