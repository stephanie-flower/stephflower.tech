<template>

    <div>
        <div v-for="row of grid">
            <div class="row">
                <div v-for="cell of row">
                    <div class="cell"
                        :class="{ clicked: cell.clicked, flagged: cell.flagged }" 
                         @click="select(cell)"
                         @click.right="flag(cell)"
                         oncontextmenu="return false;">
                         <div v-if="cell.clicked">
                            <img v-if="cell.mine" src="/minesweeper/mine.png" class="mine" />
                            <div v-else-if="cell.number > 0"><br>{{ cell.number }}</div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from "vue";
import Chance from "chance";

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
    clicked: boolean;
}

function generateMines(max: number): Position[] {
    let genMines: Position[] = [];
    let chance = Chance();

    let locations = Array.from({ length: width * height }, (value, index) => index);
    let mineLocations = chance.pickset(locations, max)

    for (const num of mineLocations) {
        genMines.push(indexToPoint(num));
    }
    
    return genMines;
}

function indexToPoint(i: number): Position {
    return {
        x: i % width,
        y: Math.floor(i / height),
    }
}

function generateGrid(): Cell[][] {
    let grid: Cell[][] = [];

    for (let i = 0; i < height; i++) {
        grid[i] = [];
        for (let j = 0; j < width; j++) {
            grid[i][j] = {
                position: {x: i, y: j},
                mine: mines.some((mine) => mine.x === i && mine.y === j),
                number: 0,
                flagged: false,
                clicked: false,
            };
        }
    }
    return grid;
}

function generateNumbers() {
    for (const mine of mines) {
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                if (!(y === 0 && x === 0)) {
                    let newX = mine.x + x;
                    let newY = mine.y + y;
                    if (newX >= 0 && newX < width && newY >=0 && newY < height) {
                        grid.value[newX][newY].number += 1;
                    }
                }
            }
        }
    }
}

const mines: Position[] = generateMines(noOfMines);
const grid: Ref<Cell[][]> = ref(generateGrid());
generateNumbers();

function select(cell: Cell) {
    cell.clicked = true;
    if (!cell.flagged && !cell.clicked) {
        if (cell.number === 0) {
            for (let i = -1; i < 2; i++) {
                for (let j = -1; j < 2; j++) {
                    const newX = cell.position.x + i;
                    const newY = cell.position.y + j;
                    if (newX >= 0 && newX < width && newY >=0 && newY < height) {
                        select(grid.value[newX][newY])
                    }
                }
            }
        }
    }
}

function flag(cell: Cell) {
    if (!cell.clicked) {
        cell.flagged = !cell.flagged;
    }
}

</script>

<style scoped>

.row {
    display: flex;
    flex-direction: row;
}

.cell {
    width: 32px;
    height: 32px;
    border: 1px solid black;
    margin: 1px;
    background-image: url("/minesweeper/cell.png");
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
}

.clicked {
    background-image: url("/minesweeper/cell_clicked.png");
}

.flagged {
    background-image: url("/minesweeper/cell_flagged.png");
}

.mine {
    height: 75%;
    image-rendering: pixelated;
}

</style>