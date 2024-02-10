<script setup lang="ts">

// credit: https://commons.wikimedia.org/wiki/Category:Minesweeper
    
</script>

<template>

    <div class="item">
        <img src="desktopIcons/about.png" alt="icon">
        <div class="optionText"> <u>T</u>his is an item </div>
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