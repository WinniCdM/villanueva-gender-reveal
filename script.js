const emojis = ["🐻", "🐶", "🐱", "🦁", "🐯", "🐮", "🐨", "🐼", "🐷", "🐰", "🐹", "🐸", "🐻‍❄️", "🐵", "🦝", "🐺"];
const grid = document.querySelector(".grid");
const dialog = document.getElementById("dialog");
const dialogBox = document.getElementById("dialogBox");
const instructionsDialog = document.getElementById("instructions");
const instructionsDialogBox = document.getElementById("instructionsBox");
const totalCards = 16;
let clickCount = 0;
const revealAfter = Math.floor(Math.random() * (totalCards - 5)) + 5; // Random clicks before reveal
// const revealAfter = 3;

for (let i = 0; i < totalCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.textContent = emojis[i];
    card.addEventListener("click", function() {
        if (!card.classList.contains("clicked")) {
            card.classList.add("clicked");
            clickCount++;
            
            if (clickCount >= revealAfter) {
                document.querySelectorAll(".card").forEach(c => {
                    c.classList.add("reveal");
                });
                showDialog();
            }
        }
    });
    grid.appendChild(card);
}

showInstructions();

function showDialog() {
    dialog.classList.add("show");
    dialogBox.classList.add("show");
}

function showInstructions() {
    instructionsDialog.classList.add("show");
    instructionsDialogBox.classList.add("show");
}

function closeInstructions() {
    instructionsDialog.classList.remove("show");
    instructionsDialogBox.classList.remove("show");
}