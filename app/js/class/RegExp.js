{
    // es5语法
    let regex = new RegExp('xyz','i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'),regex2.test('xyz123'));    //true,true

    // es6语法
    let regex3 = new RegExp(/xyz/ig,'i');   //允许两个参数，此时第二个参数会覆盖第一个参数中修饰符
    console.log(regex3.flags);      // i    flags为es6新增的表示正则表达式中修饰符属性
}

// 区分g,y
{
    let s = 'bbbdffef_bb';
    let a = /b+/g;
    let b = /b+/y;
    // 都是全局匹配，y为从上一次匹配的地点紧跟开始匹配，g为上一次匹配的地点之后任意位置都可以开始
    console.log('es5:',a.exec(s),'新增y修饰符:',b.exec(s));  // es5: Array [ "bbb" ] 新增y修饰符: Array [ "bbb" ]
    console.log('第二次：','es5:',a.exec(s),'新增y修饰符:',b.exec(s));   // 第二次： es5: Array [ "bb" ] 新增y修饰符: null

    // 判断该正则表达式是否带y修饰符
    console.log(a.sticky,b.sticky); // false true
}

// u修饰符     判断Unicode编码     将待匹配字符看作一个Unicode字符进行匹配
// .只能识别小于0xffff Unicode的字符（小于两个字节的字符）
{
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'));    // true
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'));    // false

    console.log(/\u{61}/.test('a'));    // false
    console.log(/\u{61}/u.test('a'));    // true

    console.log(`\u{20BB7}`)    // 𠮷
    let s = '𠮷';
    console.log('u-.',/^.$/.test(s));   // false    .并未匹配到字符
    console.log('u-.',/^.$/u.test(s));   // true    若字符串中某个字符大于两个字节，加上u才可以匹配

    console.log('test',/𠮷{2}/.test('𠮷𠮷'));   // false
    console.log('test',/𠮷{2}/u.test('𠮷𠮷'));   // true    匹配式本身大于两个字节，加u修饰符可以匹配

    // s修饰符匹配换行符之类，待实现

}
