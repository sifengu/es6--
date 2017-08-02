// 异步编程的一般实现方法：回调，事件触发

{
    // 基本定义
    let ajax=function(callback){
        console.log('执行');
        setTimeout(function () {
            callback&&callback.call()
        }, 1000);
    };
    ajax(function(){
        console.log('timeout1');
    })
}

{
    let ajax=function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax().then(function(){
        console.log('promise','timeout2');
    })
}

{
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
        setTimeout(function () {
            resolve()
        }, 1000);
        })
    };

    ajax()
        .then(function(){
            return new Promise(function(resolve,reject){
                setTimeout(function () {
                    resolve()
                }, 2000);
            });
        })
        .then(function(){
        console.log('timeout3');
    })
}

// catch捕获异常错误
{
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve()
            }else{
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });

    ajax(3).then(function(){
        console.log('log',3);
    }).catch(function(err){
        console.log('catch',err);
    });
}



{
    
    // 所有图片加载完后再加载页面
    // 加载图片
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            }
        })
    }
    // 添加到页面
    function showImgs(imgs){
        imgs.forEach(function(img) {
            document.body.appendChild(img)
        });
    }
     // 把多个promise实例当作一个promise实例
    Promise.all([
        loadImg("http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg"),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg')
        
    ]).then(showImgs)
}

{
    // 图片那个先加载就显示哪个
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(err){
                reject(err);
            }
        })
    }

    function showImgs(imgs){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    // 多个实例中有一个改变时，promise状态将改变
     Promise.race([
        loadImg("http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg"),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg'),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg')
        
    ]).then(showImgs)
}