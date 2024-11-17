import * as view from "./view.js";
addEventListener("load", main);
let startingArray = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
let arr;
let ARR_LEN = 10;
let TickRate = 50;
let restart = false;
let iterations = 0;
let currentPillar = 0;
let minPillar;
let start = false;

function main() {
    view.eventListners();
    view.displayPillars(startingArray);
    arr = makeArr(ARR_LEN);
}

export async function startSort() {
    iterations = 0;
    restart = false;
    start = !start;
    if (start) {
        await selectionSort();
        if (restart) {
            restartSort();
        }
    }
    view.flipSortButton(start);
}

async function selectionSort() {
    minPillar = currentPillar;
    view.highlightCurrentPillar(minPillar);
    await steps(currentPillar);
}

async function swapPillars() {
    await swap(currentPillar, minPillar, arr);

    currentPillar++;
    view.displayPillars(arr);
    if (currentPillar >= arr.length) {
        start = false;
        restart = true;
        view.flipSortButton(start);
        return;
    }
    if (start) selectionSort(arr);
    if (restart) {
        restartSort();
    }
    return arr;
}

async function steps(pillar) {
    view.highlightMinPillar(minPillar);
    view.highlightCurrentPillar(pillar);
    iterations++;
    view.displayIterations(iterations);
    if (arr[pillar] < arr[minPillar]) {
        minPillar = pillar;
    }
    
    if (pillar >= arr.length) {
        await swapPillars();
        return;
    } else {
        setTimeout(() => {
            steps(++pillar);
        }, TickRate);
    }
}

async function swap(i, j, arr) {
    await view.animateSwapTo(i, j);
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

    view.animateSwapTo(i, j);
    view.displayPillars(arr);
}

function makeArr(length) {
    currentPillar = 0;
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    view.displayPillars(arr);
    return arr;
}

export function RestartRun() {
    restart = true;
    restartSort();
}

function restartSort() {
    iterations = 0;
    currentPillar = 0;
    minPillar = 0;
    start = false;
    arr = makeArr(ARR_LEN);
    view.flipSortButton(start);
}

export function submitInput(e) {
    e.preventDefault();

    const arr_length = !isNaN(Number(e.target.arr_length.value)) ? Number(e.target.arr_length.value) : ARR_LEN;

    const tick_rate = !isNaN(Number(e.target.tick_rate.value)) ? Number(e.target.tick_rate.value) : TickRate;

    ARR_LEN = arr_length > 0 ? arr_length : ARR_LEN;
    TickRate = tick_rate > 0 ? tick_rate : TickRate;

    arr = makeArr(ARR_LEN);
}
