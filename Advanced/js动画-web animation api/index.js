const ball = document.querySelector('.ball');
// 点击反馈
window.addEventListener('click', (e) => {
    const div = document.createElement('div');
    div.classList.add('point');
    const x = e.clientX;
    const y = e.clientY;
    div.style.left = x + 'px'
    div.style.top = y + 'px'
    document.body.appendChild(div);
    div.addEventListener('animationend', () => {
        div.remove();
        move(x, y);
    })
})

// 初始化小球位置
function initBall() {
    ball.style.transform = `translate(${document.documentElement.clientWidth / 2}px,${document.documentElement.clientHeight / 2}px)`
}

initBall()

function move(x, y) {
    const rect = ball.getBoundingClientRect()
    const newX = rect.left + rect.width
    const newY = rect.top + rect.height
    ball.getAnimations().forEach(item => {
        item.cancel()
    })
    ball.animate([
        {
            transform: `translate(${newX}px,${newY}px)`
        },
        {
            transform: `translate(${newX}px,${newY}px) scaleX(2)`,
            offset: 0.6
        },
        {
            transform: `translate(${x}px,${y}px) scaleX(2)`,
            offset: 0.8
        },
        {
            transform: `translate(${x}px,${y}px) scaleX(1)`
        }],
        {
            duration: 500,
            iterations: 1,
            fill: 'forwards'
        })
}

