蒙层取消滚动事件

问题：
多出现与移动端 蒙层取消滚动事件相关的问题，如蒙层阻止页面滚动，页面仍然滚动等。
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: gray;
        }

        .container {
            margin-bottom: 1000px;
        }

        .modal {
            width: 100px;
            height: 100px;
            background-color: brown;
            position: fixed;
            top: calc(50% - 50px);
            left: calc(50% - 50px);
            display: none;
        }
    </style>
</head>

<body>
    <div class="container">
        <button class="btn">打开蒙层</button>
    </div>
    <div class="modal">蒙层
        <button class="btn2">关闭</button>
    </div>
    <script>
        const btn = document.querySelector('.btn')
        const btn2 = document.querySelector('.btn2')
        const modal = document.querySelector('.modal')

        btn.addEventListener('click', () => {
            window.addEventListener('wheel', scroll)
            modal.style.display = 'block'
        })
        btn2.addEventListener('click', () => {
            modal.style.display = 'none'
            window.removeEventListener('wheel', scroll)
        })
        function scroll(e) {
            e.preventDefault()
        }
    </script>
</body>

</html>
```

上面的情况 我们会发现 即使我们阻止了滚动事件 还是可以在蒙层打开时滚动

但是我们只要监听事件加上 passive: false 就可以了
{
passive: false
}

```
...
 btn.addEventListener('click', () => {
    window.addEventListener('wheel', scroll,{
        passive: true
    })
    modal.style.display = 'block'
 })
```
