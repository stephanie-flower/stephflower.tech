<template>

    <div>
        <div v-for="row of grid">
            <div class="row">
                <div v-for="cell of row">
                    <div class="cell" 
                         @click="select(cell)"
                         @click.right="flag(cell)"
                         oncontextmenu="return false;">
                        {{ cell.flagged }}
                        <div v-if="cell.mine">m</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";

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

function generateMines(max: number): Position[] {
    let genMines: Position[] = [];

    let pointIndexes: number[] = [];
    let minIndex = 0;
    let maxIndex = (width * height) - 1 - max - 1;
    let index: number;
    for (let i = 0; i < max; i++) {
        index = getRandomInt(minIndex, maxIndex);
        pointIndexes.push(index);
        if (maxIndex - index > max - i) {
            maxIndex--;
        }
    }

    for (const index of pointIndexes) {
        genMines.push(indexToPoint(index));
    }

    return genMines;
}

function indexToPoint(i: number): Position {
    return {
        x: i % height,
        y: Math.floor(i / width),
    }
}

function generateGrid(): Cell[][] {
    let grid: Cell[][] = [];
    let mineRow = 0;
    let mineCol = 0;

    for (let i = 0; i < height; i++) {
        grid[i] = [];
        for (let j = 0; j < width; j++) {
            grid[i][j] = {
                position: {x: i, y: j},
                mine: mines.some((mine) => mine.x === i && mine.y === j),
                number: 0,
                flagged: false,
            };
        }
    }
    return grid;
}

const mines: Position[] = generateMines(noOfMines);
const grid: Ref<Cell[][]> = ref(generateGrid());

function select(cell: Cell) {
    console.log(cell.position.x, cell.position.y);
}

function flag(cell: Cell) {
    cell.flagged = !cell.flagged;
}

function getRandomInt(min: number, max: number) { //thanks mdn web docs <333
    return Math.floor(Math.random() * max) + min;
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