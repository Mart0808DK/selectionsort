import * as view from "./view.js";
addEventListener("load", main);
let startingArray = [3, 5, 1, 2, 4, 6, 7, 8, 9, 10];
let arr;
let ARR_LEN = 10;
let TickRate = 100;
let restart = false;
let interations = 0;

function main() {
    eventListners();
    startSort();
}

function startSort() {
    interations = 0;
    restart = false;
    view.displayPillars(startingArray);
    selectionSort(startingArray);

}

function eventListners() {
    document.querySelector("form").addEventListener("submit", submitInput);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        view.highlightCurrentPillar(min);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
                
            }
        }
        swap(i, min, arr);
    }
    return arr;
}

function swap(i, j, arr) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

function makeArr(length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * length));
    }
    return view.displayPillars(arr);
}

function RestartRun() {
    restart = true;

    setTimeout(startSort, TickRate);
}

function submitInput(e) {
    e.preventDefault();

    const arr_length = !isNaN(Number(e.target.arr_length.value)) ? Number(e.target.arr_length.value) : ARR_LEN;

    //const tick_rate = !isNaN(Number(e.target.tick_rate.value)) ? Number(e.target.tick_rate.value) : TickRate;

    ARR_LEN = arr_length > 0 ? arr_length : ARR_LEN;
    //TickRate = tick_rate > 0 ? tick_rate : TickRate;

    arr = makeArr(ARR_LEN);
    console.log(arr);
    
}
