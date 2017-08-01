{
    // 将一组值，转换为数组，
    // Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);      // arr= Array [ 3, 4, 7, 9, 11 ]

    let empty=Array.of();
    console.log('empty',empty);   // empty Array [  ]
}

{
    // 返回的是集合，不是数组，不能使用数组方法，例如forEach无效
    let p=document.querySelectorAll('p');
    // 把一个伪数组转化为真正的数组
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        // 获取DOM节点文本内容
        console.log(item.textContent); 
    });
    // .from 映射作用（Map）   接受两个参数
    console.log(Array.from([1,3,5],function(item){return item*2})); //  // Array [ 2, 6, 10 ]
}

{
    // 填充数组
    console.log('fill-7',[1,'a',undefined].fill(7));    // fill-7 Array [ 7, 7, 7 ]
    console.log('fill,pos',['a','b','c'].fill(7,1,3));  // fill,pos Array [ "a", 7, 7 ]     (替换的元素，替换起始位置，替换长度)
}

{
    for(let index of ['1','c','ks'].keys()){
        console.log('keys',index);  // 返回下标集合
    }
    //   没有兼容情况下，不支持
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);    // 返回值集合
    }
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);  // 取到索引和值
    }
}

{
    console.log([1,2,3,4,5].copyWithin(0,3,4));     // Array [ 4, 2, 3, 4, 5 ]  （复制起始位置，开始读取数据位置，截至位置）
    // [1,2,3,4,5]:从0个位置开始替换，替换的值从第3个位置开始读取->1替换成4；替换的值到第4个位置停止读取->只有4-》最终只有1被替换成4
    // 该方法会改变原始数组
    let a = [1,2,3,4,5]
    let b = a.copyWithin(0,3,4);
    console.log(a,b)    // Array [ 4, 2, 3, 4, 5 ] Array [ 4, 2, 3, 4, 5 ]
}

{
    // 找出第一个满足条件的值
    console.log([1,2,3,4,5,6].find(function(item){
                                        return item>3   // 4
                                    }));
    // 返回第一个满足条件的索引
    console.log([1,2,3,4,5,6].findIndex(function(item){
                                            return item>3   // 3
                                        }));
}

{
    // 包含关系 可以判断NaN
    console.log('number',[1,2,NaN].includes(1));    // number true
    console.log('number',[1,2,NaN].includes(NaN));  // number true
}
