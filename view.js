import * as controller from "./controller.js";
export function displayPillars(arr) {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    arr.forEach((element, index) => {
        const pillar = document.createElement("div");
        pillar.classList.add("pillar");
        pillar.style.height = `${element * 50}px`;
        pillar.style.left = `${index * 25}px`;

        const textNode = document.createTextNode(element);
        pillar.appendChild(textNode);
        container.appendChild(pillar);
    });
}

export function displayIterations(interations) {
    document.querySelector("#iterations").textContent = interations;
}

export function highlightCurrentPillar(index) {
    const pillars = document.querySelectorAll(".pillar");
    pillars.forEach((pillar, i) => {
        if (i === index) {
           pillar.classList.add("current_pillar");
        } else {
            pillar.classList.remove("current_pillar");
        }
    });
}

export function highlightMinPillar(index) {
    const pillars = document.querySelectorAll(".pillar");
    pillars.forEach((pillar, i) => {
        if (i === index) {
            pillar.classList.add("min_pillar");
        } else {
            pillar.classList.remove("min_pillar");
        }
    });
}

export function eventListners() {
    document.querySelector("form").addEventListener("submit", controller.submitInput);
    document.querySelector("#sortButton").addEventListener("click", controller.startSort);
    document.querySelector("#restart").addEventListener("click", controller.RestartRun);
}