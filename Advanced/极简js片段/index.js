/**
 * 复制文本到剪切板 注意这个有点问题 在不同环境的时候
 */
const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
}

// copyToClipboard('Hello World')

/**
 * 获取第几天
 */
const dayOfYear = (date) => {
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
}
// console.log(dayOfYear((new Date(2022, 10, 1))))

/**
 * 将rgb颜色灰度化（基于光感加权平均）
 */
const gray = (r, g, b) => {
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
// console.log(gray(50, 100, 100))

/**
 * 解析url的参数
 */
const parseQueryString = (url) => {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const decode = (s) => {
        return decodeURIComponent(s.replace(/\+/g, ' '))
    }
    const params = {}
    search.substring(0).split('&').forEach(function (s) {
        if (!s) return
        const pair = s.split('=')
        let key = decode(pair[0])
        let val = decode(pair[1])
        if (key in params) {
            if (Array.isArray(params[key])) {
                params[key].push(val)
            } else {
                params[key] = [params[key], val]
            }
        } else {
            params[key] = val
        }
    })
    return params
}
// console.log(parseQueryString('http://a.com/?a=1&b=2&c=3'))

/**
 * 对象属性筛选器
 */
const pick = (obj, ...props) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([k]) => props.includes(k))
    )
}
// console.log(pick({ a: 1, c: 1 }, 'a'))


/**
 * 随机HEX颜色
 */
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')
}
// console.log(randomColor())

/**
 * 随机字符串
 */
const randomString = () => {
    return Math.random().toString(36).slice(2)
}
// console.log(randomString())

/**
 * 去掉字符串中元素标记
 */
const removeElementMark = (str) => {
    // return str.replace(/<[^>]+>/g, '')
    // return new DOMParser().parseFromString(str, 'text/html').body.textContent || '';
}

// console.log(removeElementMark('<div>saf</div>'))

/**
 * 解析dom树
 */
const removeTag = (fragment) => {
    return new DOMParser().parseFromString(fragment, 'text/html').body.textContent || '';
}

// console.log(removeTag('<div>saf</div>'))

/**
 * 随机数生产随机颜色和字符串
 */
const randomRgbColor = () => {
    return Math.random().toString(16).substring(2, 8).padEnd(6, '0');
}

// console.log(randomRgbColor())

/**
 * 随机数生产字符串
 */
const randomStr = (len = 6) => {
    if (len <= 11) {
        return Math.random().toString(36).slice(2, 2 + len).padEnd(len, '0')
    } else {
        return randomStr(11) + randomStr(len - 11)
    }
}

// console.log(randomStr(111))


