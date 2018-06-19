const SPEED = document.querySelector('.speed');
const BAR = document.querySelector('.speed-bar');
const VIDEO = document.querySelector('.flex');

SPEED.addEventListener('mousemove', function(e){
    const Y = e.pageY - this.offsetTop;
    const PERCENT = Y / this.offsetHeight;
    const MIN = 0.4;
    const MAX = 4;
    const HEIGHT = Math.round(PERCENT * 100) + '%';
    const PLAYBACKRATE = PERCENT * (MAX - MIN) + MIN;
    BAR.textContent = PLAYBACKRATE.toFixed(2) + 'x'
    BAR.style.height = HEIGHT
    VIDEO.playbackRate = PLAYBACKRATE;
    console.log(HEIGHT)
})