const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = Math.random() * (360 - 0) + 0;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 9;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = (Math.random() * 360) + 0;
let direction = true;

function draw(e){
    if(!isDrawing) return;
    console.log(e)
    ctx.strokeStyle = `hsl(${(Math.random() * 360) + 0}, 100%, 50%)`;
    ctx.lineWidth = Math.random() * 10 + 0
    ctx.beginPath()
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();

    lastX = e.offsetX
    lastY = e.offsetY

    
    if (hue >= 360){
        hue = 0; 
    }

    
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;

})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)

