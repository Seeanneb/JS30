const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullscreen = document.querySelector('.fullscreen')

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton(){
    const icon = this.paused ? 'PLAY' : 'PAUSE';
    toggle.textContent = icon;
        console.log(`update`)
}

function skip(){
    console.log('skipped')
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100 ;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e)
}

// function goFullscreen(){
//     const full = [maxWidth = 'none', width = '100%']
//     const normal = [maxWidth = '750px', width = 'auto']
//     player.style = full
//     console.log(player.style = full)
    
// }


video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => {button.addEventListener('click', skip)})
ranges.forEach(range => {range.addEventListener('change', handleRangeUpdate)})
ranges.forEach(range => {range.addEventListener('mousemove', handleRangeUpdate)})
let mousedown = false;

progress.addEventListener('click', scrub)
progress.addEventListener('click', () => {mousedown && scrub(e)})
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// fullscreen.addEventListener('click', goFullscreen)
