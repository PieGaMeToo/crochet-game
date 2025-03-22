// Get canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Draw a test circle
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(400, 300, 50, 0, Math.PI * 2);
ctx.fill();

console.log("Game script loaded!");
