文本溢出点点隐藏

1、单行

```
css：
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
```

2、多行 兼容问题但没关系

```
    display:-webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4
```
