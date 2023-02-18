function toggleAudio(button, audio) {
    const music = document.getElementById(audio);
    if (music.paused) {
        music.play();
        button.classList.remove('btn-success');
        button.classList.add('btn-danger');
        button.classList.remove('bi-play-fill');
        button.classList.add('bi-pause-fill');
    } else {
        music.pause();
        button.classList.remove('active');
        button.classList.remove('btn-danger');
        button.classList.add('btn-success');
        button.classList.remove('bi-pause-fill');
        button.classList.add('bi-play-fill');
    }
}