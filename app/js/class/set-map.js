// set中元素不可重复
// Map key可以是任意数据类型（object只能是字符串，symbol也当作字符串）
// 优先考虑map,set

{
    // add方法，size属性
    let list = new Set();
    list.add(5);    
    list.add(7);

    console.log('size',list.size);  // size 2
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);  // size 5
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    // 元素不可重复，添加相同元素则不生效    去重
    console.log('list',list);   // list Set [ 1, 2 ]
    // 不会做数据类型的转换，2!='2'
    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2);    // unique Set [ 1, 2, 3, "2" ]
}

{
    // set方法
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    console.log('has',list.has('add'));     // has true
    console.log('delete',list.delete('add'),list);  // delete true Set [ "delete", "clear", "has" ]
    list.clear();
    console.log('list',list);   // list Set [  ]
}

{
    // set遍历
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    for(let key of list.keys()){    
        console.log('keys',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let [key,value] of list.entries()){
        console.log('entries',key,value);
    }

    list.forEach(function(item){console.log(item);})
}


{
    // WeakSet的元素只能是对象  弱引用（地址引用） 不会检测对象是否被用过（跟垃圾回收机制无关）不会检测是否被回收
    // 没有clear方法  没有set属性 不能遍历
    let weakList=new WeakSet();

    let arg={};

    weakList.add(arg);

    // weakList.add(2); // 报错

    console.log('weakList',weakList);
}

{
    // set方法添加元素    get获取元素
    let map = new Map();
    let arr=['123'];

    map.set(arr,456);

    console.log('map',map,map.get(arr));    // map Map{ Array[1]: 456 } 456
}

{
    // 接受格式为数组
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);    // map args Map { a: 123, b: 456 }
    console.log('size',map.size);   // size 2
    console.log('delete',map.delete('a'),map);  // delete true Map { b: 456 }
    console.log('clear',map.clear(),map);   // clear undefined Map {  }
}

{
    // key值必须为对象，和weak set的区别类似
    let weakmap=new WeakMap();

    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));    // 123
}

{
    // map,set和数组的对比
    let map = new Map();
    let set = new Set();
    let array = [];
    // 增加元素
    map.set('t',1);
    set.add({t:1});
    array.push({t:1});
    
    // 查找元素
    let map_exist = map.has('t');   // 返回true
    // ！important {t:1}为新生成的对象，所以此处返回false  将对象保存为一个变量将返回true
    let set_exist = set.has({t:1}); //返回false   
    let arr_exist = array.find(item=>item.t);   // 返回值
    console.log('arr',arr_exist)

    // 修改元素
    map.set('t',2);
    set.forEach(item=>item.t?item.t=2:'')
    array.forEach(item=>item.t?item.t=2:'');

    // 删除
    map.delete('t');
    set.forEach(item=>item.t?set.delete(item):'');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log(map,array);

}
{
    // map,set和对象的对比
    let item = {t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增加
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;

    // 查找元素
    map.has('t');
    set.has(item);
    't' in obj;

    // 修改
    map.set('t',2);
    // set修改数据本身，或者用forEach
    item.t = 2;
    obj['t'] = 2;

    // 删除
    map.delete('t');    //成本最低
    set.delete(item);   // 没有原始数据结构仍需forEach
    delete obj['t'];
}