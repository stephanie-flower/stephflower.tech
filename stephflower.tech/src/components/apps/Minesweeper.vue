<template>

    <div>
        <div v-for="row of grid">
            <div class="row">
                <div v-for="cell of row">
                    <div class="cell" 
                         @click="select(cell)"
                         @click.right="flag(cell)"
                         oncontextmenu="return false;">
                        {{ cell.position.x }}{{ cell.position.y }}
                        {{ cell.flagged }}
                    </div>
                </div>
            </div>
        </div>
    
    </div>

</template>

<script setup lang="ts">
import { ref } from "vue";

const width: number = 8;
const height: number = 8;
const noOfMines: number = 10;

type Position = {
    x: number;
    y: number;
}

type Cell = {
    position: Position;
    mine: boolean;
    number: number;
    flagged: boolean;
}

const generateGrid = () => {
    let grid = [];
    let maxMines = noOfMines;
    let mineRow = 0;
    let mineCol = 0;

    for (let i = 0; i < height; i++) {
        grid[i] = [];
        for (let j = 0; j < width; j++) {
            grid[i][j] = {
                position: {x: i, y: j},
                mine: false,
                number: 0,
                flagged: false,
            };
        }
    }
    return grid;
}

const grid: Cell[][] = ref(generateGrid());

function select(cell: Cell) {
    console.log(cell.position.x, cell.position.y);
}

function flag(cell: Cell) {
    cell.flagged = !cell.flagged;
}

function getRandomInt(max) { //thanks mdn web docs <333
    return Math.floor(Math.random() * max);
}

</script>

<style scoped>

.row {
    display: flex;
    flex-direction: row;
}

.cell {
    width: 24px;
    height: 24px;
    border: 1px solid black;
    margin: 1px;
}

</style>