保持元素宽高比

适用范围：视频网站、图片网站等

保持元素宽高比例 可通过高度是宽度的比例

方法 1、aspect-ratio 这个 css 属性 兼容问题注意

方法 2、通过 padding 设置 因为 padding 的百分比值为包含块的宽度的比例
通过 padding 撑开后 通过子元素绝对定位就可以 因为绝对定位的位置 相对祖先定位元素的填充盒

```
aspect-ratio

<style>
    .container {
        width: 50%;
        background-color: #f0f;
        aspect-ratio: 4/3;
    }
    <div class="container"></div>
</style>
```

```
padding
<style>
    .container {
        width: 100%;
        background-color: #f0f;
        padding-top: 75%;
        position: relative;
    }

    .item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
    }
</style>
<div class="container">
        <div class="item"></div>
</div>
```
