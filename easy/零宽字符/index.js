// 零宽字符就是隐藏字符
// 一般用于水印 解决隐藏信息的传递
// unicode字符

// U+200B ZERO WIDTH SPACE：这是一个空白字符，它不占用任何可见空间。

// U+200C ZERO WIDTH NON-JOINER：这是一个字符，它用于防止两个字符连接在一起。

// U+200D ZERO WIDTH JOINER：这是一个字符，它用于将两个字符连接在一起。

// U+200E LEFT-TO-RIGHT MARK：这是一个字符，它用于指示文本应该从左到右读取。

// U+202A LEFT-TO-RIGHT EMBEDDING：这是一个字符，它用于将嵌入式文本从左到右读取。

// U+202C POP DIRECTIONAL FORMATTING：这是一个字符，它用于取消之前设置的方向格式。

// U+202D LEFT-TO-RIGHT OVERRIDE：这是一个字符，它用于覆盖之前设置的方向格式。

// U+2062 INVISIBLE TIMES：这是一个字符，它表示乘法运算。

// U+2063 INVISIBLE SEPARATOR：这是一个字符，它表示分隔符。

// U+FEFF ZERO WIDTH NO-BREAK SPACE：这是一个字符，它用于防止两个单词在行尾分开。

var result = '随风而去',
    result1 = '随风\u200d而去';
console.log(result, result1);
console.log(result === result1);