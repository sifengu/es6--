{
    // 简写
    let o=1;
    let k=2;
    let es5={
        o:o,
        k:k
    };
    let es6={
        o,
        k
    };
    console.log(es5,es6);   // Object { o: 1, k: 2 } Object { o: 1, k: 2 }

    let es5_method={
        hello:function(){
        console.log('hello');
        }
    };
    let es6_method={
        hello(){
        console.log('hello');
        }
    };
    console.log(es5_method.hello(),es6_method.hello()); // hello hello
}

{
    // 属性表达式
    let a='b';
    let es5_obj={
        a:'c',
        b:'c'
    };
    // 用变量表示属性
    let es6_obj={
        [a]:'c'
    }

    console.log(es5_obj,es6_obj);   // Object { a: "c", b: "c" } Object { b: "c" }

}

{
    // 新增API
    // is判断两个参数是否完全相等   ===
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');    // 字符串 true true
    console.log('数组',Object.is([],[]),[]===[]); // 数组 false false
    // 要拷贝的对象，拷贝的值      浅拷贝 只拷贝自身属性，不拷贝不可枚举以及继承属性
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));   // 拷贝 Object { a: "a", b: "b" }
    
    let a = {a:'a'},b = {b:'b'};

    Object.assign(a,b);    

    console.log('a:',a)     // a: Object { a: "a", b: "b" }
    console.log('b',b)     // b Object { b: "b" }

    // 获取索引和值
    let test={k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

// Babel支持不是很好
// {
//     // 扩展运算符
//     let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
//     c={
//         c:'ddd',
//         d:'ccc'
//     }
// }
