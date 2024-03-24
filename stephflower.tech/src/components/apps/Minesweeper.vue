<template>

    <div>
        <div v-if="state === 'lost'"> You lose! </div>
        <div v-if="state === 'won'"> You win! </div>
        <div v-for="row of grid" :key="row.toString()" >
            <div class="row">
                <div v-for="cell of row" :key="cell.position.toString()">
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

type GameState = 'playing' | 'won' | 'lost';

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
                    let newPos = {x: mine.x + x, y: mine.y + y}
                    if (validPosition(newPos)) {
                        grid.value[newPos.x][newPos.y].number += 1;
                    }
                }
            }
        }
    }
}

function validPosition(pos: Position): boolean {
    return pos.x >= 0 && pos.x < width && pos.y >=0 && pos.y < height
}

const mines: Position[] = generateMines(noOfMines);
const grid: Ref<Cell[][]> = ref(generateGrid());
generateNumbers();
const state: Ref<GameState> = ref("playing");
const flaggedMines: Ref<number> = ref(0);

const adj: Position[] = [{x: 1, y: 0}, 
                         {x: 0, y: 1},
                         {x: 1, y: -1},
                         {x: -1, y: 0},
                         {x: 0, y: -1},
                         {x: -1, y: -1},
                         {x: 1, y: 1},
                         {x: -1, y: 1}];

function select(cell: Cell) {
    if (flaggedMines.value === noOfMines) { 
        state.value = 'won';
    }
    if (!cell.flagged && state.value === 'playing') {
        cell.clicked = true;
        if (cell.mine) {
            state.value = 'lost';
        }
        if (cell.number === 0) {
            for (const pos of adj) {
                let newPos = {x: cell.position.x + pos.x, y: cell.position.y + pos.y};
                if (validPosition(newPos)) {
                    select(grid.value[newPos.x][newPos.y]);
                }
            }
        }
    }
}

function flag(cell: Cell) {
    if (!cell.clicked) {
        cell.flagged = !cell.flagged;
        if (cell.flagged && cell.mine) {
            flaggedMines.value += 1;
        } else if (!cell.flagged && cell.mine) {
            flaggedMines.value -= 1;
        }
    }
    if (flaggedMines.value === noOfMines) { 
        state.value = 'won';
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