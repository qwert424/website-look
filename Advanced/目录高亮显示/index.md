目录高亮显示

需求 1、点击侧边栏目录 实现文章标题跳转

需求 2、滚动文章 实现侧边栏标题高亮显示

需求一解决：
通过 url 的 hash 值来实现文章的标题的跳转 侧边栏目录点击事件 实现类样式的添加

需求二解决：
通过监听滚动事件（注意防抖） 先获取所有的标题元素 a 的 href 的哈希值 通过 new Url().hash 获取对应侧边栏目录的#值 在通过 getBoundingClientRect 获取对应的相对视口 找到需要展示的 id 高亮显示侧边栏对应 id

```
高亮显示代码 传入对应id 添加类样式
function highLight(id){
    ...
}

const links =document.querySelectorAll('.toc a[href^="#"]');
const title=[]
for(const link of links){
    link.addEventListener('click',()=>{
        highLight(link.getAttribute('href'))
    })
    const url=new URL(link.href)
    const dom=document.querySelector(url.hash)
    if(dom){
        title.push(dom)
    }
}

防抖函数
function debounce(fn,delay=300){
    let timer=null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer=setTimeout(()=>{
            fn(...args)
        },delay)
    }
}
滚动事件
const scrollHandle=debounce(()=>{
    const rect=title.map(item=>item.getBoundingClientRect());
    const topRange=300;
    for(let i=0;i<title.length;i++){
        //区间 标题在top范围内
        if(rect[i].top>=0&&rect[i].top<topRange){
            highLight(title[i].id);
            return;
        }else if(rect[i].top<0 && rect[i+1] && rect[i+1].top>document.documentElement.clientHeight){
        //第二种情况：上一个标题的top在视口上 下一个标题在视口下(超过视口)

        }
    }
},100)

window.addEventListener("scroll",scrollHandle)
```
