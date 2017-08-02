// es5中函数this指向是调用函数的对象
// es6中箭头函数this指向是函数定义时的指向

{
    // 参数默认值
    function test(x, y = 'world'){
        console.log('默认值',x,y);
    }
    test('hello');  // 默认值 hello world
    test('hello','kill');   // 默认值 hello kill
}

{
    let x='test';
    function test2(x,y=x){  // y=x中为参数中的x
        console.log('作用域',x,y); // kill kill
    }
    test2('kill');
}

{
    // rest参数       将参数转化成数组    from是将伪数组转化为数组
    function test3(...arg){
        for(let v of arg){
        console.log(v);  // 1 2 3 4 a
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log(...[1,2,4]);    // 1 2 4
    console.log('a',...[1,2,4]);    // a 1 2 4
}

{
    // 注意this绑定，this指向定义的对象
    let arrow = v => v*2;   // 函数名=函数参数=>函数内容返回值
    let arrow2 = () => 5;
    console.log('arrow',arrow(3));  // arrow 6
    console.log(arrow2());  // 5

}

{
    // 函数伪调用    提升性能（函数递归）
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x)
    }
    fx(123) // tail 123
}
