
const fileNum = document.querySelector('.fileNum');
const dragContainer = document.querySelector('.drag-container');
const file1 = document.querySelector('#file1');
const file2 = document.querySelector('#file2');
const uploadBtn = document.querySelector('.upload-btn');
const fileContainer = document.querySelector('.file-container');
const fileSize = document.querySelector('.fileSize');

// 待上传数组
let fileArr = [];
let fileXhr = [];

// 拖拽事件
dragContainer.addEventListener('dragenter', (e) => {
    e.preventDefault();
})
dragContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
})
dragContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    if(!e.dataTransfer.types.includes('Files')){
        window.alert('仅支持文件上传')
        return;
    }
    // 获取拖拽文件列表
    for (const item of e.dataTransfer.items) {
      
        const fileEnter = item.webkitGetAsEntry()
        ifFileAndDo(fileEnter)
    }
})

// 文件input事件
file1.addEventListener('change', (e) => {
    const arr = [...e.target.files];
    arr.forEach(f => {
        if (f.size > 1024 * 1024 * 2) {
            // 弹窗提示文件类型不支持
            window.alert(`文件大小:${(f.size / 1024 / 1024).toFixed(2)}M超过2M!`);
            return;
        }
        if (f.type.slice(0, 5) === 'image') {
            fileArr.push({
                file: f,
                isUploaded: false,
            });
            fileNum.childNodes[1].innerText = fileArr.filter(item => item !== null).length;
            fileSize.childNodes[1].innerText = (+fileSize.childNodes[1].innerText + f.size / 1024).toFixed(2);
            createFileElement(f, fileArr.length - 1)
        } else {
            // 弹窗提示文件类型不支持
            window.alert(`${f.name}文件类型不支持`);
            return;
        }
    })
})

file2.addEventListener('change', (e) => {
    const arr = [...e.target.files];
    arr.forEach(f => {
        if (f.size > 1024 * 1024 * 2) {
            // 弹窗提示文件类型不支持
            window.alert(`文件大小:${(f.size / 1024 / 1024).toFixed(2)}M超过2M!`);
            return;
        }
        if (f.type.slice(0, 5) === 'image') {
            fileArr.push({
                file: f,
                isUploaded: false,
            });
            fileNum.childNodes[1].innerText = fileArr.filter(item => item !== null).length;
            fileSize.childNodes[1].innerText = (+fileSize.childNodes[1].innerText + f.size / 1024).toFixed(2);
            createFileElement(f, fileArr.length - 1)
        } else {
            // 弹窗提示文件类型不支持
            window.alert(`${f.name}文件类型不支持`);
            return;
        }
    })
})

// 上传
uploadBtn.addEventListener('click', uploadFile)

// 创建文件信息
function createFileElement(f, index) {
    // 删除空状态
    const emptyContainer = document.querySelector('.empty-container');
    if (emptyContainer) {
        fileContainer.removeChild(emptyContainer);
    }
    const div = document.createElement('div');
    // 文件item
    div.classList.add('file-item');
    div.innerHTML = `
        <div><span>${f.name}</span></div>
        <div><span>${f.type}</span></div>
        <div><span>${(f.size / 1024).toFixed(2)}kb</span></div>
        <div><span class="upload-condition">待上传</span></div>
        <div><span><i class="iconfont icon-icon mydel" data-index=${index}></i></span></div>
    `;
    fileContainer.appendChild(div);
    // 删除操作
    const mydel = div.querySelector('.mydel');
    mydel.addEventListener('click', (e) => {
        const progressContainer = div.querySelector('.progress');
        if (progressContainer || key) {
            return;
        }
        fileContainer.removeChild(div);
        if (fileArr[e.target.dataset.index].isUploaded) {
            fileSuccess.childNodes[1].innerText = +fileSuccess.childNodes[1].innerText - 1;
        }
        fileArr[e.target.dataset.index] = null
        fileXhr[e.target.dataset.index] = null
        fileNum.childNodes[1].innerText = fileArr.filter(item => item !== null).length;
        fileSize.childNodes[1].innerText = (+fileSize.childNodes[1].innerText - f.size / 1024).toFixed(2);
        successNum--;
        if (fileArr.filter(item => item === null).length === fileArr.length) {
            fileArr = [];
            fileXhr = []
            fileSuccess.childNodes[1].innerText = 0;
            fileNum.childNodes[1].innerText = 0;
            fileSize.childNodes[1].innerText = 0;
            successNum = 0;
        }
        // 无状态
        if (fileArr.length === 0) {
            const div = document.createElement('div');
            div.innerHTML = `
            <i class="iconfont icon-wushuju2 no-data"></i>
            <span>无数据</span>
        `;
            div.classList.add('empty-container')
            fileContainer.appendChild(div);
        }
    })
}

// 成功数量
let successNum = 0;
// 上传数量
let uploadingNum = 0;
// 上传锁
let key = false;

const fileSuccess = document.querySelector('.fileSuccess');

// 进度监听
function handleEvent(index) {
    const fileCondition = document.querySelectorAll('.file-item')
    const progressContainer = fileCondition[index].querySelector('.progress');
    // if (e.lengthComputable) {
    // arr.forEach(item => {
    //     item.value = (e.loaded / e.total) * 100;
    // })
    // } else {
    progressContainer.value = progressContainer.value + 0.05 > 0.98 ? progressContainer.value : progressContainer.value + 0.05;
    // }
}

// 上传开始
function handleLoadStart(index) {
    mydelAddEvent(index)
    key = true;
    const fileCondition = document.querySelectorAll('.file-item');
    const progressContainer = fileCondition[index].querySelector('.upload-condition');
    progressContainer.parentElement.innerHTML = `<progress max="1" value="0" class="progress"></progress>`
}
// 上传结束
function handleLoadend(index) {
    removeEvent(fileXhr.filter(item => item !== null)[index].xhr);
    mydelRemoveEvent(index)
    const fileCondition = document.querySelectorAll('.file-item')
    const progressContainer = fileCondition[index].querySelector('.progress');
    if (fileXhr.filter(item => item !== null)[index].isAbort) {
        progressContainer.parentElement.innerHTML = `<span class="upload-condition" style="background-color:#0056b3">待上传</span>`;
    } else {
        progressContainer.parentElement.innerHTML = `<span class="upload-condition" style="background-color:green">已上传</span>`;
    }
    uploadingNum--;
    if (uploadingNum === 0) {
        key = false
    }
}
// 上传错误
function handleLoadError(index) {
    const fileCondition = document.querySelectorAll('.file-item')
    const progressContainer = fileCondition[index].querySelector('.progress');
    progressContainer.parentElement.innerHTML = `<span class="upload-condition" style="background-color:red">上传失败</span>`
}
// 上传
function handleLoad(item, index) {
    fileXhr.filter(item => item !== null)[index].isAbort = false;
    successNum++;
    item.isUploaded = true;
    fileSuccess.childNodes[1].innerText = successNum;
}

// 发送文件请求
function uploadFile() {
    if (fileArr.length === 0) {
        window.alert("上传内容不能为空!");
        return
    }
    if (key) {
        window.alert("上传文件中!");
        return
    }
    if (successNum === fileArr.filter(item => item !== null).length) {
        window.alert("上传文件已全部上传!");
        return
    }
    fileArr.filter(item => item !== null).forEach((item, index) => {
        if (item === null || item.isUploaded) {
            return
        }
        let xhr;
        if (fileXhr.filter(item => item !== null)[index]) {
            xhr = new XMLHttpRequest()
            fileXhr.filter(item => item !== null)[index].xhr = xhr;
            addEvent(xhr, index, item)
        } else {
            xhr = new XMLHttpRequest();
            addEvent(xhr, index, item)
            fileXhr.push({
                xhr: xhr,
                isAbort: false
            })
        }
        uploadingNum = fileArr.filter(item => item !== null && item.isUploaded === false).length;
        xhr.open("get", "https://jsonplaceholder.typicode.com/photos")
        xhr.send(null)

        // xhr.onreadystatechange = function () { if (xhr.readyState === 4 && xhr.status === 200) { alert('request was successful!') } }
    })
}

let handleLoadStartFn, handleLoadendFn, handleLoadFn, handleLoadErrorFn, handleEventFn;
function addEvent(xhr, index, item) {
    console.log(index)
    handleLoadStartFn = () => handleLoadStart(index)
    handleLoadendFn = () => handleLoadend(index)
    handleLoadFn = () => handleLoad(item, index)
    handleLoadErrorFn = () => handleLoadError(index)
    handleEventFn = () => handleEvent(index)
    xhr.addEventListener("loadstart", handleLoadStartFn);
    xhr.addEventListener("loadend", handleLoadendFn);
    xhr.addEventListener("load", handleLoadFn);
    xhr.addEventListener("error", handleLoadErrorFn);
    xhr.addEventListener("progress", handleEventFn);
}

function removeEvent(xhr) {
    xhr.removeEventListener("loadstart", handleLoadStartFn);
    xhr.removeEventListener("loadend", handleLoadendFn);
    xhr.removeEventListener("load", handleLoadFn);
    xhr.removeEventListener("error", handleLoadErrorFn);
    xhr.removeEventListener("progress", handleEventFn);
}

let mydelEvent;
function mydelAddEvent(index) {
    mydelEvent = () => handleAbort(index);
    const mydel = document.querySelectorAll('.mydel')
    mydel[index].parentElement.addEventListener('click', mydelEvent)
}

function mydelRemoveEvent(index) {
    const mydel = document.querySelectorAll('.mydel')
    mydel[index].parentElement.removeEventListener('click', mydelEvent)
}
function handleAbort(index) {
    const fileCondition = document.querySelectorAll('.file-item');
    let progressContainer;
    if (fileCondition[index]) {
        progressContainer = fileCondition[index].querySelector('.progress');
    }
    if (!progressContainer) {
        return
    }
    fileXhr.filter(item => item !== null)[index].isAbort = true;
    fileXhr.filter(item => item !== null)[index].xhr.abort();
}

// 文件迭代
function ifFileAndDo(fileEnter) {
    if (fileEnter.isFile) {
        // 文件
        fileEnter.file((f) => {
            if (f.size > 1024 * 1024 * 2) {
                // 弹窗提示文件类型不支持
                window.alert(`文件大小:${(f.size / 1024 / 1024).toFixed(2)}M超过2M!`);
                return;
            }
            if (f.type.slice(0, 5) === 'image') {
                fileArr.push({
                    file: f,
                    isUploaded: false
                });
                fileNum.childNodes[1].innerText = fileArr.filter(item => item !== null).length;
                fileSize.childNodes[1].innerText = (+fileSize.childNodes[1].innerText + f.size / 1024).toFixed(2);
                createFileElement(f, fileArr.length - 1)
            } else {
                // 弹窗提示文件类型不支持
                window.alert(`${f.name}文件类型不支持`);
                return;
            }
        })
    } else {
        // 目录
        const render = fileEnter.createReader();
        let getEntries = () => {
            render.readEntries(
                (results) => {
                    if (results.length) {
                        results.forEach(item => {
                            ifFileAndDo(item)
                        })
                    }
                },
                (error) => {
                    /* handle error — error is a FileError object */
                },
            );
        };
        getEntries();
    }
}
