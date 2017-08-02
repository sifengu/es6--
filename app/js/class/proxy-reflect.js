// 常用于数据类型校验

{
    // 供应商     原始对象
    let obj={
        time:'2017-03-11',
        name:'net',
        _r:123
    };
    // 代理商  用户只需操作此对象
    let monitor=new Proxy(obj,{
        // 拦截对象属性的读取
        // monitor.time读取到的值始终为2018
        get(target,key){
        return target[key].replace('2017','2018')
        },

        // 拦截对象设置属性
        // 只允许修改name属性
        set(target,key,value){
            if(key==='name'){
                return target[key]=value;
            }else{
                return target[key];
            }
        },

        // 拦截key in object操作
        // 只能判断出name属性
        has(target,key){
            if(key==='name'){
                return target[key]
            }else{
                return false;
            }
        },

        // 拦截delete
        // 只能删除_开头的属性
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else{
                return target[key]
            }
        },
        // 拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        // 保护time属性
        ownKeys(target){
            return Object.keys(target).filter(item=>item!='time')
        }
    });

    console.log('get',monitor.time);

    monitor.time='2018';
    monitor.name='mukewang';
    console.log('set',monitor.time,monitor);

    console.log('has','name' in monitor,'time' in monitor);

    // delete monitor.time;
    // console.log('delete',monitor);
    //
    // delete monitor._r;
    // console.log('delete',monitor);
    console.log('ownKeys',Object.keys(monitor));

}

{
  let obj={
    time:'2017-03-11',
    name:'net',
    _r:123
  };

  console.log('Reflect get',Reflect.get(obj,'time'));
  Reflect.set(obj,'name','mukewang');
  console.log(obj);
  console.log('has',Reflect.has(obj,'name'));
}



{
    function validator(target,validator){
        return new Proxy(target,{
            _validator:validator,
            // 判断当前目标是否有key值
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }


    const personValidators = {
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val === 'number' && val > 18;
        }
    }

    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            // 返回的是对person实例的代理
            return validator(this,personValidators)
        }
    }
    const person = new Person('thzheng',20);
    console.info(person);
    person.name = 48;   //不能设置name = 48
}