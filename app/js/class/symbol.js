{
  // 声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2); // false
  let a3=Symbol.for('a3');  // for会先检查是否由key值在全局定义过，如果有则引用，没有则相当于Sym()
  let a4=Symbol.for('a3');
  console.log(a3===a4);     // true 
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj); // obj Object { abc: 345, c: 456 ,Symbol(abc):"123"}
    // 用symbol做key值，of拿不到
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }
    // 获取symbolkey值，用这个方法的得到（数组结果）
    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log(obj[item]); // 123
    })
    // 获取普通和symbolkey值
    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
        // ownkeys abc 345index.js:118:10
        // ownkeys c 456index.js:118:10
        // ownkeys Symbol(abc) 123
    })
}
