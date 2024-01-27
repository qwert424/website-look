// 音频可视化
const canvas = document.querySelector('canvas');
const video = document.querySelector('audio');
const ctx = canvas.getContext('2d');
// 初始化canvas的尺寸
function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
initCanvas();

let isInit = false;
let dataArray, vidAnalyser;

video.onplay = () => {
    if (isInit) return;
    // 初始化操作
    const vidCtx = new AudioContext();//音频上下文
    //音频源数据
    const vidSource = vidCtx.createMediaElementSource(video);
    // 音频分析器
    vidAnalyser = vidCtx.createAnalyser();
    vidAnalyser.fftSize = 512;
    dataArray = new Uint8Array(vidAnalyser.frequencyBinCount)
    //音频源连接音频分析器 
    vidSource.connect(vidAnalyser);
    vidAnalyser.connect(vidCtx.destination)
    isInit = true;
}

// 把分析出来的波形进行绘制
function draw() {
    requestAnimationFrame(draw);
    // 清空画布
    if (!isInit) return
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#008c8c';
    vidAnalyser.getByteFrequencyData(dataArray);
    const len = dataArray.length / 2;
    const barWidth = canvas.width / len;
    // 画布颜色
    for (let i = 0; i < len; i++) {
        const data = dataArray[i]
        const barHeight = data / 255 * canvas.height;
        const x = canvas.width / 2 - i * barWidth;
        const x1 = i * barWidth + canvas.width / 2;
        const y = canvas.height - barHeight;
        ctx.fillRect(x1, y, barWidth - 2, barWidth)
        ctx.fillRect(x, y, barWidth - 2, barWidth)
    }
}
draw()