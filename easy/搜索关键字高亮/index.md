搜索关键字高亮

思路：
1、判断是否正在搜索 正在搜索则创建一个正则表达式
2、数据 map 的时候 才看正则是否存在 存在则通过 replaceAll 方法替换 第二个参数传入函数进行替换即可

例子：

```
const inputItem=document.querySelector('input');
const inputVal=inputItem.value;
let reg;//正则

<!-- 生成正则表达式 -->
if(inputVal){
    reg=new RegExp(inputVal,'gi');
}

<!-- 替换 -->
list.map(item=>{
    const name=item.name;
    if(reg){
        name=name.replaceAll(reg,(match)=>{
            return `<span style="color:red">${match}</span>`
        })
    }
})
```
