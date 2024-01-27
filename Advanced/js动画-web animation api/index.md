js 动画之 Web Animation API

动画我们分成 css 动画和 js 动画
当 css 动画有很多的局限性 完成不了我们的需求的时候 我们会使用 js 动画

js 动画我们可以采用第三方的库 也可以采用原生的 API
优点：方便 简单 缺点：提高打包体积等 效率问题（dom 树 css 树）

相对于其他方法 ;Animation Api 是浏览器提供的动画 它的优点是效率高（不干涉主线程的操作 他这个操作 dom 树 css 树很稳定） 而且使用简单 缺点是兼容性差

```
ball.animation('关键帧'，'动画配置')

关键帧：数组 内部每个对象对应css的关键帧  默认每个关键帧均分时间

动画配置：就是css animation相关配置 如： { duration: 500,iterations: 1, fill: 'forwards'}


function move(x, y) {
    const rect = ball.getBoundingClientRect()
    const newX = rect.left + rect.width
    const newY = rect.top + rect.height
    ball.animate([
        {
            transform: `translate(${newX}px,${newY}px)`
        },
        {
            transform: `translate(${x}px,${y}px)`
        }],
        {
            duration: 500,
            iterations: 1,
            fill: 'forwards'
        })
}
你控制台可以看到小球的transform属性没有变化 dom树十分稳定 效率超级高 不需要主线程


那么是否还能优化呢？

首先我们要知道 web animation api 在每次ball.animate()的时候 都会创建一个新的动画实例 保存起来 方便下次使用 可以调用
 // ball.getAnimations().forEach(item => {
 //     item.cancel()
 // })


 关键帧内 通过offset配置每个时间占比
 {
    offset：0.6
 }
```
