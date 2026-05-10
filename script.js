const rollButton = document.getElementById("rollButton");
const result = document.getElementById("result");
const inventoryList = document.getElementById("inventoryList");
const particles = document.getElementById("particles");

/* CREATE DOTS */

for (let i = 0; i < 250; i++) {

    const dot = document.createElement("div");

    dot.classList.add("dot");

    dot.style.left = Math.random() * 100 + "%";
    dot.style.top = Math.random() * 100 + "%";

    particles.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

/* RNG SYSTEM */

function rollRarity() {

    if (Math.floor(Math.random() * 128) === 0) {
        return {
            name: "LEGENDARY",
            color: "gold"
        };
    }

    if (Math.floor(Math.random() * 32) === 0) {
        return {
            name: "EPIC",
            color: "deepskyblue"
        };
    }

    if (Math.floor(Math.random() * 8) === 0) {
        return {
            name: "RARE",
            color: "lime"
        };
    }

    if (Math.floor(Math.random() * 4) === 0) {
        return {
            name: "UNCOMMON",
            color: "gray"
        };
    }

    return {
        name: "COMMON",
        color: "white"
    };
}

/* ROLL BUTTON */

rollButton.addEventListener("click", () => {

    const rolled = rollRarity();

    result.textContent = rolled.name;
    result.style.color = rolled.color;

    /* CHANGE DOT COLORS */

    dots.forEach(dot => {
        dot.style.background = rolled.color;
        dot.style.boxShadow = `0 0 8px ${rolled.color}`;
    });

    /* INVENTORY */

    const li = document.createElement("li");

    li.textContent = rolled.name;
    li.style.color = rolled.color;

    inventoryList.prepend(li);
});
