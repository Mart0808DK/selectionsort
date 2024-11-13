export function animateSwapTo(i, j) {
    let pillar1 = document.getElementById(`pillar${i}`);
    let pillar2 = document.getElementById(`pillar${j}`);
    console.log(`Swapping ${pillar1.id} and ${pillar2.id}`);

    const pillar1Left = pillar1.style.left;
    const pillar2Left = pillar2.style.left;

    pillar1.style.left = pillar2Left;
    pillar2.style.left = pillar1Left;
}

export function customDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
