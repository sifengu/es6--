
function test(){
    var a = 2;
    for(let i=1;i<3;i++){
        console.log(i);
    };
    console.log(i);
}

// test();

// es6强制开启严格模式

function last(){
    // const声明时必须赋值，数值类型赋值后不可修改(PI),对象的属性可以修改（指针不变，对象本身可变）
    const PI=3.1415926;
    // PI = 8       //报错
    const k = {
        a:1
    }
    k.b = 3;
    console.log(PI,k);
}

last();
