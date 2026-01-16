const dotSize = 40;
const lag = 8; // smoothing factor

let cursor = { x: window.innerWidth/2, y: window.innerHeight/2 };
let dotPos = { x: cursor.x, y: cursor.y };

// Create the dot inside the body
const emoji = document.createElement("div");
emoji.textContent = '🧑‍🚀';
emoji.style.fontSize = dotSize + "px";
emoji.style.position = "absolute"; // relative to body
emoji.style.pointerEvents = "none"; // don't block clicks
emoji.style.zIndex = "999999";
emoji.classList.add('mouse-out');
document.body.appendChild(emoji);

// Update mouse position
window.addEventListener("mousemove", e => {
    cursor.x = e.pageX; // relative to body
    cursor.y = e.pageY;
});

// Animate the cursor
function animate() {
    dotPos.x += (cursor.x - dotPos.x) / lag;
    dotPos.y += (cursor.y - dotPos.y) / lag;

    emoji.style.left = dotPos.x - dotSize/2 + "px";
    emoji.style.top = dotPos.y - dotSize/2 + "px";

    requestAnimationFrame(animate);
}

animate();

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.getElementsByTagName('a');
    for (let button of buttons) {
        button.addEventListener('mouseover', () => {
            emoji.classList.remove('mouse-out');
            emoji.classList.add('mouse-hover');
        });
        button.addEventListener('mouseleave', () => {
            emoji.classList.remove('mouse-hover');
            emoji.classList.add('mouse-out');
        });
    }
});