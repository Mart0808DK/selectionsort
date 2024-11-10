import * as view from "./view.js";
addEventListener("load", main);
let startingArray = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
let arr;
let ARR_LEN = 10;
let TickRate = 300;
let restart = false;
let interations = 0;
let currentPillar = 0;
let minPillar = 0;

function main() {
    view.eventListners();
    view.displayPillars(startingArray);
    arr = makeArr(ARR_LEN);
    startSort();
}

export function startSort() {
    interations = 0;
    restart = false;
    view.displayPillars(arr);
    selectionSort(arr);
    console.log(arr);
}

function selectionSort(arr) {
    minPillar = currentPillar;
    view.highlightCurrentPillar(minPillar);
    steps(currentPillar, minPillar);
    
    swap(currentPillar, minPillar, arr);
    currentPillar++;

    return arr;
}

function steps(j, min) {
    if (arr[j] < arr[min]) {
        minPillar = j;
        view.highlightMinPillar(min);
    }
    
    if (currentPillar >= arr.length) {
        return;
    
    } else {
        setTimeout(() => {
            steps(++currentPillar, min);
        }, TickRate);
    }
    
}

function swap(i, j, arr) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
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
    setTimeout(startSort, TickRate);
}

export function submitInput(e) {
    e.preventDefault();

    const arr_length = !isNaN(Number(e.target.arr_length.value)) ? Number(e.target.arr_length.value) : ARR_LEN;

    //const tick_rate = !isNaN(Number(e.target.tick_rate.value)) ? Number(e.target.tick_rate.value) : TickRate;

    ARR_LEN = arr_length > 0 ? arr_length : ARR_LEN;
    //TickRate = tick_rate > 0 ? tick_rate : TickRate;

    arr = makeArr(ARR_LEN);
}
