(function () {

    const box = document.querySelector('.box');

    // 子元素数量
    const childCount = 6;
    const childArr = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.png", "./5.jpeg", "./6.jpeg"]
    // 初始化
    function init() {
        // 1、生产元素
        createEle(box, {
            childCount,
            childArr
        })
    }

    // 1.生产元素
    function createEle(container, options) {
        const { childCount, childArr } = options;
        for (let i = 0; i < childCount; i++) {
            const div = document.createElement('div');
            const img = document.createElement('img');
            div.classList.add('item')
            img.classList.add('img')
            img.src = childArr[i]
            div.appendChild(img)
            container.appendChild(div);
            div.style.transformOrigin = `center ${box.clientHeight / 2 + div.clientWidth / 2}px`;
            div.style.transform = `rotate(${(360 / childCount) * i}deg)`
            img.style.transform = `rotate(-${(360 / childCount) * i}deg)`
            // 2、添加动画
            animation(div, (360 / childCount) * i);
            animation(img, -(360 / childCount) * i, "img");
        }


    }

    // 2.添加动画
    function animation(target, start, val) {
        if (val === "img") {
            target.animate([
                {
                    transform: `rotate(-${start}deg)`
                },
                {
                    transform: `rotate(-${360 - start}deg)`
                },
            ], {
                duration: 10000,
                iterations: 'Infinity',
            })
        } else {
            target.animate([
                {
                    transform: `rotate(${start}deg)`
                },
                {
                    transform: `rotate(${start + 360}deg)`
                },
            ], {
                duration: 10000,
                iterations: 'Infinity',
            })
        }

    }

    init();

})()