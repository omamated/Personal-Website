/* so I only really used javascript for the fature where theres a spotlight or in other words a flashlight that follows your cursoer as you move aroung the website*/


const flashlight = document.getElementById("flashlight");
/* So this document represents the webpage and it finds the html id that is named/called flashlight and saves that in javascript so it can utilize it as flashlight */
document.addEventListener("mousemove", (e) => {
    /* so this ensures that the code is only ran and the functions only occur when the cursor is moving or is on the page*/
    flashlight.style.setProperty("--xpos", `${e.clientX}px`);
    /* This sets a custom property in css so that it is ran at this x value, this also applies to the y values with the code written down below */
    flashlight.style.setProperty("--ypos", `${e.clientY}px`);
});
