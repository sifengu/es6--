{
    console.log('a',`\u0061`);  // a a
    console.log('s',`\u20bb7`);  // s ₻7    超过0xFFFF的值会让20bb成一个字符

    console.log('s',`\u{20bb7}`);   // s 𠮷     将20bb7看做了一个字符
}

{
    let s = '𠮷';

    console.log(s.length);  // 2
    console.log('0',s.charAt(0));   // 0 �
    console.log('1',s.charAt(1));   // 0 �
    console.log('at0',s.charCodeAt(0)); // at0 55362
    console.log('at1',s.charCodeAt(1)); // at1 57271

    let s1 = '𠮷a';
    console.log(s1.length); //3
    console.log('code',s1.codePointAt(0));  // code 134071
    console.log('code',s1.codePointAt(0).toString(16)); // code 20bb7
    console.log('code',s1.codePointAt(1)); // code 57271    取后两个字节
    console.log('code',s1.codePointAt(2)); // code 97       (a)
}

{
    console.log(String.fromCharCode("0x20bb7"));  // ஷ
    console.log(String.fromCodePoint("0x20bb7"));     // 𠮷
}

{
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);  // � � a b c
    }
    for(let code of str){     //遍历器可以判断Unicode大于两个字节的字符
        console.log('es6',code);    // 𠮷 a b c
    }
}

{
    let str='string';
    //   判断是否包含
    console.log('includes',str.includes('c'));    // false
    //   判断是否以str起始
    console.log('start',str.startsWith('str'));   // true
    console.log('end',str.endsWith('ng'));    // true
}

{
    let str='abc';
    //   重复次数   es5中很麻烦（变量自加）
    console.log(str.repeat(2));   // abcabc
}

// 模板字符串
{
    let name = "list";
    let info = "hello world";
    let m = `i am ${name},${info}`;
    console.log(m);   // i am list,hello world
}

// es6中暂未实现的api，已有提案
{
    // padStart(length,补充的值)
    console.log('1'.padStart(2,'0')); // 01 1长度不够在前补充0
    console.log('1'.padEnd(2,'0'));   // 10
}

// 标签模板 常用于字符串过滤 多语言转换
{
    let user = {
        name:'list',
        info:'hello world'
    };
// abc函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，也就是说，变量替换只发生在数组的第一个成员和第二个成员之间
    console.log(abc`i am ${user.name},${user.info}`);   // i am ,,,listhello world
    function abc(s,v1,v2){
        console.log(s,v1,v2);   // Array [ "i am ", ",", "" ] list hello world
        return s+v1+v2  // i am ,,,listhello world
    }
}

{
    console.log(String.raw`Hi\n${1+2}`);  // Hi\n3    raw在所有斜杠前加上转义=>\变成\\
    console.log(`Hi\n${1+2}`);    // Hi 换行 3
}
