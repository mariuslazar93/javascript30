var player = document.querySelector('.player');
var video = player.querySelector('.viewer');
var progress = player.querySelector('.progress');
var progressBar = player.querySelector('.progress__filled');
var playBtn = player.querySelector('.js-play');
var volumeControl = player.querySelector('[name="volume"]');
var playbackRateControl = player.querySelector('[name="playbackRate"]');
var skipBtns = player.querySelectorAll('[data-skip]');
var mouseDownOnProgressBar = false;

function togglePlay() {
    if(video.paused)
        video.play();
    else {
        video.pause();
    }
}

function updateButton(){
    var icon = this.paused ? '►' : '❚❚';
    playBtn.textContent = icon;
}

function changeVolume() {
    video.volume = this.value;
}

function changePlayRate() {
    video.playbackRate = this.value;
}

function updateProgress() {
    progressBar.style.flexBasis = video.currentTime * 100 / video.duration + '%';
}

function updatePosition(e) {
    var x = e.offsetX;
    var totalWidth = parseFloat(window.getComputedStyle(progress, null).getPropertyValue('width').replace(/px/,""));
    video.currentTime = ( e.offsetX / progress.offsetWidth ) * video.duration;
}

function skip(){
    video.currentTime +=  parseFloat(this.dataset.skip);
}

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', togglePlay);
volumeControl.addEventListener('change', changeVolume);
playbackRateControl.addEventListener('change', changePlayRate);
skipBtns.forEach(function(item){
    item.addEventListener('click', skip);
});
progress.addEventListener('click', updatePosition);
progress.addEventListener('mousedown', function(){
    mouseDownOnProgressBar = true;
})
progress.addEventListener('mouseup', function(){
    mouseDownOnProgressBar = false;
})
progress.addEventListener('mousemove', function(e){
    mouseDownOnProgressBar && updatePosition.call(this,e);
});
