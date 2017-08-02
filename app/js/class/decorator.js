// 修改类的行为   只在类中能用
// babel-plugin-transform-decorators-legacy 
{
    // 类名，属性名，描述
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor
    };

    class Test{
        // @readonly   //只读
        time(){
            return '2017-03-11'
        }
    }

    let test=new Test();

    // 报错：  TypeError: "time" is read-only
    // test.time=function(){
    //   console.log('reset time');
    // };

    console.log(test.time());   // 2017-03-11
}


{
    let typename=function(target,name,descriptor){
        target.myname='hello';
    }
    // 在class类前进行修饰，对这个类添加myname属性
    @typename
    class Test{

    }

    console.log('类修饰符',Test.myname);
    // 第三方库修饰器的js库：core-decorators; 
}

{
    // 日志系统
    let log = (type) => {
        return function(target,name,descriptor){
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target,arg);
                console.log(`log ${type}`);
            }
        }
    }

    class AD{
        @log('show')
        show(){
            console.log('show')
        }
        @log('click')
        click(){
            console.log('click')
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}
