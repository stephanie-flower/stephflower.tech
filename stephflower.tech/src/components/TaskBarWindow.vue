<script setup lang="ts">
    import "98.css";

    const props = defineProps(['img', 'title'])

</script>

<template>

    <button @click="$emit('toggle')">
        <img :src="props.img" />
        <div class="text"> {{ props.title }} </div>
    </button>

</template> 

<style scoped>
    .text {
        color: black;
    }

</style>