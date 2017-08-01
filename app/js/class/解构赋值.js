// 数组解构赋值
{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);   // 1,2
}
{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);  // 1,2,[3,4,5,6]
}
{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    // [a,b,c] = [1,2];   // 1,2,undefined
    console.log(a,b,c);   // 1,2,3
}
// 对象解构赋值
{
    let a,b;
    ({a,b} = {a:1,b:2});
    console.log(a,b);  // 1,2
}

// 数组解构赋值常用场景
// 用于变量交换
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);   // 2,1
}

// 接受函数值
{
    function f(){
        return [1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);   // 1,2
}

// 选择性接受想要函数返回值
{
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,,,b] = f();
    console.log(a,b);   // 1,4
}

// 不知道函数返回值是多少，只关心某一个元素时
{
    function f(){
        return [1,2,3,4,5];
    }
    let a,b,c;
    [a,...b] = f();
    // [a,,...b] = f();    // 1,[3,4,5]
    console.log(a,b);   // 1,[2,3,4,5]
}

// 对象解构赋值常用场景

{
    let o = {p:1,q:true};
    let {p,q} = o;
    console.log(p,q);   // 1,true
}

{
    let {a = 10,b = 5} = {a:3};
    console.log(a,b);   // 3,5
}

// 前后端json通信
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'desc'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);   //abc,test
}
