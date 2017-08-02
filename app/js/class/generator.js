// 解决异步编程
// 需要打开兼容
{
  // genertaor基本定义
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k=tell();

    console.log(k.next());    // Object { value: "a", done: false }
    console.log(k.next());    // Object { value: "b", done: false }
    console.log(k.next());    // Object { value: "c", done: true }
    console.log(k.next());    // Object { value: undefined, done: true }
}

{
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    }

    for(let value of obj){
        console.log('value',value);
    }
}

// 状态机
    {
    let state=function* (){
        while(1){
        yield 'A';
        yield 'B';
        yield 'C';
        }
    }
    let status=state();
    console.log(status.next());   // Object { value: "A", done: false }
    console.log(status.next());   // Object { value: "B", done: false }
    console.log(status.next());   // Object { value: "C", done: false }
    console.log(status.next());   // Object { value: "A", done: false }
    console.log(status.next());   // Object { value: "B", done: false }
}

// 语法糖
// {
//   let state=async function (){
//         while(1){
//         await 'A';
//         await 'B';
//         await 'C';
//         }
//     }
//     let status=state();
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
//     console.log(status.next());
// }

// 抽奖逻辑

{
    let draw = function(count){
        // 抽奖逻辑
        console.log(`剩余${count}次`)
    }

    let residu = function* (count){
        while(count > 0){
            count--;
            yield draw(count)
        }
    }
    
    let star = residu(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();
    },false)
}

// websocket 长轮询
{
    let ajax = function* (){
        yield new Promise(function(resolve,reject){
            // 模拟请求耗时
            setTimeout(function(){
                // 为最新数据时为0
                resolve({code:0})
            },200)
        })
    }
    // 轮询过程
    let pull = function(){
        let genertaor = ajax();
        let step = genertaor.next();
        step.value.then(function(d){
            if(d.code != 0){
                setTimeout(function(){
                    console.log('wait');
                    pull();
                },1000)             
            }else{
                console.log(d);
            }
        })
    }
    pull(); // Object { code: 0 }
}
