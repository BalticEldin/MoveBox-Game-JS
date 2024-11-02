const Box = document.getElementById("Box");

// Set the initial position to prevent undefined values
Box.style.position = "relative";
Box.style.top = "0px";   // Set an initial top position
Box.style.left = "0px";  // Set an initial left position

// Function to generate a random color
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

// Listen for keydown events on the whole document
document.addEventListener("keydown", (evt) => {
    // Convert current position values to numbers, or default to 0 if not set
    let currentTop = parseInt(Box.style.top) || 0;
    let currentLeft = parseInt(Box.style.left) || 0;

    // Set the background color to a new random color
    const newColor = makeRandColor();
    Box.style.backgroundColor = newColor;

    if (evt.code === "ArrowUp") {
        Box.style.top = (currentTop - 20) + "px";
    } else if (evt.code === "ArrowDown") {
        Box.style.top = (currentTop + 20) + "px";
    } else if (evt.code === "ArrowLeft") {
        Box.style.left = (currentLeft - 20) + "px";
    } else if (evt.code === "ArrowRight") {
        Box.style.left = (currentLeft + 20) + "px";
    } else {
        alert("Please use the arrow keys and nothing else");
    }
});
