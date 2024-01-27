渐变背景边框

渐变背景是浏览器绘制出来的图片

原先浏览器不支持 background-image：渐变颜色 通过动画 改变 css 变量 实现旋转

现在 houdini APi 可以实现 可以干预浏览器回流、重绘 分为 jsApi cssApi

css 属性可以参与绘制

效果实现有几个思路：

1、houdini Api 去实现

```
        @property --direc {
            syntax: '<angle>';
            initial-value: 0deg;
            inherits: false;
        }
        .container {
            --direc: 0deg;
            width: 200px;
            height: 300px;
            border-radius: 5px;
            margin: 10px auto;
            background-image: linear-gradient(var(--direc), #d38312, #a83279);
            position: relative;
            animation: test 3s infinite;
        }
        @keyframes test {
            to {
                --direc: 360deg
            }
        }

```

2、最外层定义一个长方形 div，这个 div 里面的元素溢出隐藏，在这个 div 里定义一个足够大（旋转时不能有留白）的渐变背景元素，用动画循环旋转这个渐变背景元素，再在渐变背景元素之上定义一个比外层 div 小一点（模仿边框），背景颜色与 body 一致，也可以做出和视频中老师一样的效果，兼容性可能会好点。
缺点就是不能是透明的背景。
