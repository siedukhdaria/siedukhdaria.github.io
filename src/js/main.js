
/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#story-video-overlay');
const videoFile = document.querySelector('#video-story');

let isClicked = false;

function toggleOverlay(event){

    if (event.type === 'mouseleave') {
        videoOverlay.classList.add('overlay-hidden');
    } else {
        videoOverlay.classList.remove('overlay-hidden');
    }
}

videoOverlay.onmouseleave = toggleOverlay;
videoOverlay.onmouseenter = toggleOverlay;

videoBtn.addEventListener('click', function () {
    if (videoFile.paused) {
        videoOverlay.classList.add('overlay-hidden');
        videoFile.play();
        isClicked = true;
        return;
    }

    if (!videoFile.paused && isClicked) {
        videoBtnIcon.src = "assets/images/story/pause-white.png";
        videoOverlay.classList.remove('overlay-hidden');
        videoFile.pause();
        return;
    }


    if (!videoFile.paused) {
        videoFile.pause();
        videoOverlay.classList.remove('overlay-hidden');
        videoBtnIcon.src = 'assets/images/story/play-white.svg';
    }
})


