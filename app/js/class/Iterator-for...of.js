// 用一种相同的接口读取不同数据结构的集合（map array）
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();
    console.log(map.next());  // Object { value: "hello", done: false }
    console.log(map.next());  // Object { value: "world", done: false }
    console.log(map.next());  // Object { value: undefined, done: true }
}

// 自己实现iterator方法
{
    let obj={
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:arr[index++],
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

// for of实际是调用iterator接口
{
  let arr=['hello','world'];
  for(let value of arr){
    console.log('value',value);
  }
}
