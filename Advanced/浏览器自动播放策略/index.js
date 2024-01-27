const modal = document.querySelector('.modal')
const vid = document.querySelector('.video')
const btn = document.querySelector('.btn')

function play() {
    vid.muted = true;
    vid.play()
    const ctx = new AudioContext();
    const canAutoPlay = ctx.state === 'running'
    ctx.close();
    if (canAutoPlay) {
        vid.muted = false;
        modal.style.display = 'none';
        btn.removeEventListener('click', play)
    } else {
        modal.style.display = 'flex'
        btn.addEventListener('click', play)
    }
}

play()