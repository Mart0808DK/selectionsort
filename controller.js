import * as view from "./view.js";
addEventListener("load", main);
let startingArray = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
let arr;
let ARR_LEN = 10;
let TickRate = 300;
let restart = false;
let interations = 0;
let currentPillar = 0;
let minPillar;

function main() {
    view.eventListners();
    view.displayPillars(startingArray);
    arr = makeArr(ARR_LEN);
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
    
}

function swapPillars() {
    swap(currentPillar, minPillar, arr);
    console.log(arr);
    
    currentPillar++;
    view.displayPillars(arr);
    
    return arr;
}

function steps(j) {
    console.log(j, arr[minPillar]);
    view.highlightMinPillar(minPillar);
    view.highlightCurrentPillar(j);
    
    if (arr[j] < arr[minPillar]) {
        minPillar = j;
        console.log(`found new min ${arr[minPillar]}, from j ${arr[j]} and min ${arr[minPillar]}` );
        
    }
    
    if (j >= arr.length) {
        swapPillars();
        return;
    
    } else {
        setTimeout(() => {
            steps(++j);
        }, TickRate);
    }
    
}

function swap(i, j, arr) {
    console.log(`swapping ${arr[i]} and ${arr[j]}`);
    console.log(i, j);
    
    
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
