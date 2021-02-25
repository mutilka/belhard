
    
    
    let max = 400;
    let mmedia;
    let play;
    let bar;
    let progress;
    let mute;
    let volume;
    let loop;



function init() {
    // alert('hi');





    mmedia = document.getElementById('media');
    play = document.getElementById('play');
    bar = document.getElementById('bar');
    progress = document.getElementById('progress');
    mute = document.getElementById('mute');
    volume = document.getElementById('volume');
    loop = document.getElementById('loop');

    play.addEventListener('click',push);
    bar.addEventListener('click',move);
    mute.addEventListener('click',noSound);
    volume.addEventListener('change',controlSound);



}


addEventListener('load',init);



function push() {
    if(!mmedia.paused && !mmedia.ended) {

        mmedia.pause();
        play.value = 'Воспр.';
        

    } else {
       mmedia.play();
       play.value = 'Пауза';
       loop = setInterval(status, 1000);
    }
}

function status() {
    if(!mmedia.ended) {
        let size = parseInt(mmedia.currentTime * max / mmedia.duration);
        progress.style.width = `${size}px`;
    } else {
        progress.style.width = '0';
        play.value = 'Воспр.';
        clearInterval(loop);
    }
}


function move(e) {
    if(!mmedia.ended) {
        let mouseX = e.pageX - bar.offsetLeft;
        let newTime = mouseX * mmedia.duration / max;
        mmedia.currentTime = newTime;
        progress.style.width = `${mouseX}px`;
    }
}

function noSound() {
    if(mmedia.muted == false) {
     mmedia.muted = true;
     mute.value = `Вкл.`;
    } else {
     mmedia.muted = false;
     mute.value = `Звук`;   
    }
}

function controlSound() {
    mmedia.volume = volume.value;
}