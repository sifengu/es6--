{
    // 0B开头表示二进制
    console.log('B',0B111110111);   // B 503
    //   0o表示八进制
    console.log(0o767);     // 503
}

{
    // 判断数是否“有尽”
    console.log('15',Number.isFinite(15));  //15 true
    console.log('NaN',Number.isFinite(NaN));    // NaN false
    console.log('1/0',Number.isFinite('true'/0));   // 1/0 false
    console.log('NaN',Number.isNaN(NaN));   // NaN true
    console.log('0',Number.isNaN(0));   // 0 false

}

{
    // 判断是否为整数
  console.log('25',Number.isInteger(25));   // 25 true
  console.log('25.0',Number.isInteger(25.0));   // 25.0 true       important!
  console.log('25.1',Number.isInteger(25.1));   // 25.1 false
  console.log('25.1',Number.isInteger('25'));   // 25.1 false
}

{
    // 判断一个数是否在-2^53  -  2^53之间
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);     // 9007199254740991 -9007199254740991
  console.log('10',Number.isSafeInteger(10));   // 10 true
  console.log('a',Number.isSafeInteger('a'));   // a false
}

{
    // 返回一个小数的整数部分
  console.log(4.1,Math.trunc(4.1));     // 4.1 4
  console.log(4.9,Math.trunc(4.9));     // 4.9 4
}

{
    // 判断一个数的标志（正数，负数，0）
  console.log('-5',Math.sign(-5));  // -5 -1
  console.log('0',Math.sign(0));    // 0 0
  console.log('5',Math.sign(5));    // 5 1
  console.log('50',Math.sign('50'));    //50 1
  console.log('foo',Math.sign('foo'));  // foo NaN
}


{
    // 立方根的计算
  console.log('-1',Math.cbrt(-1));  // -1 -1
  console.log('8',Math.cbrt(8));    // 8 2
}


// 三角函数，立方函数方法