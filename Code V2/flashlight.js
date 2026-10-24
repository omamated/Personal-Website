
const flashlight = document.getElementById("flashlight");

document.addEventListener("mousemove", (e) => {
    flashlight.style.setProperty("--xpos", `${e.clientX}px`);
    flashlight.style.setProperty("--ypos", `${e.clientY}px`);
});
