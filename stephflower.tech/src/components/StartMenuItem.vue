<script setup lang="ts">

// credit: https://commons.wikimedia.org/wiki/Category:Minesweeper
const emit = defineEmits(['open']);

    
</script>

<template>

    <div class="item" @click="emit('open')">
        <img src="/minesweeper/mine.png" alt="icon">
        <div class="optionText"> <u>M</u>inesweeper </div>
    </div>

</template>

<style scoped>

    .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 2px;
        width: 98%;
    }

    .item img {
        width: 2vw;
        margin: 10px;
    }

    .item:hover {
        background-color: navy;
        color: white;
    }

    .optionText {
        margin: 20px;
        font-size: 14px;
    }

</style>