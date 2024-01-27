函数防抖
目的 就是在 3 种情况下 我们合理调用函数的频率

1、高频 多次触发的情况下 如：window.resize 事件
2、耗时 运行的函数是十分耗时的操作
3、最后一个操作为准的需求 就是中间的变化过程我们不 care

```
封装函数防抖
function debounce(fn,delay){
    let timeId;
    return function(...args){
        clearInterval(timeId);
        timeId = setInterval(()=>{
            fn.apply(this, args);
        }, delay);
    }
}

```
