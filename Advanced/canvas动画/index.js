const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

// 画布初始化
function initCanvas() {
    cvs.width = window.innerWidth * devicePixelRatio;
    cvs.height = window.innerHeight * devicePixelRatio;
}

initCanvas();

// 随机值
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 画点
class Point {
    constructor() {
        //半径
        this.r = 3
        // 坐标
        this.x = randomNum(this.r, cvs.width - this.r)
        this.y = randomNum(this.r, cvs.height - this.r)
        // x速度
        this.xSpeed = randomNum(-50, 50)
        // y速度
        this.ySpeed = randomNum(-50, 50)
        // 最后运动时间
        this.lastRunTime = null
    }
    draw() {
        if (this.lastRunTime) {
            const time = (Date.now() - this.lastRunTime) / 1000
            let x = this.x + this.xSpeed * time
            let y = this.y + this.ySpeed * time
            if (x <= this.r) {
                x = this.r;
                this.xSpeed *= -1;
            } else if (x >= cvs.width - this.r) {
                x = cvs.width - this.r;
                this.xSpeed *= -1;
            }
            if (y <= this.r) {
                y = this.r
                this.ySpeed *= -1
            } else if (y >= cvs.height - this.r) {
                y = cvs.height - this.r
                this.ySpeed *= -1
            }
            this.x = x;
            this.y = y;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgb(200,200,200)';
        ctx.fill();
        ctx.closePath();
        this.lastRunTime = Date.now()
    }
}

// 画图
class Graph {
    constructor(pointCount = 30, maxLineDis = 300) {
        this.pointCount = pointCount;
        this.maxLineDis = maxLineDis;
        this.pointsArr = new Array(pointCount).fill(0).map(() => new Point());
    }
    draw() {
        requestAnimationFrame(() => {
            this.draw()
        })
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        for (let i = 0; i < this.pointCount; i++) {
            const p1 = this.pointsArr[i]
            p1.draw()
            for (let j = i + 1; j < this.pointCount; j++) {
                const p2 = this.pointsArr[j]
                p2.draw()
                const dis = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
                if (dis > this.maxLineDis) {
                    continue;
                }
                ctx.beginPath();

                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.closePath();
                ctx.strokeStyle = `rgba(200,200,200,${1 - dis / this.maxLineDis})`
                ctx.stroke();

            }
        }
    }
}

new Graph().draw()