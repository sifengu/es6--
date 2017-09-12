// 交换函数
function swap(i, j, arr){
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


// 冒泡
function bubbleSort(array) {
  // 平均O(n^2)  O(1)
  // 最好O(n)  O(1)
  let length = array.length;
  for(let i = 0; i<length; i++) {
    for(let j = 0; j<length - i - 1; j++) {
      array[j] > array[j+1] && swap(j+1, j, array)
    }
  }
}


// 选择
function selectSort(array) {
  // 平均O(n^2)  O(1)
  let length = array.length,min;
  for(let i = 0;i<length;i++) {
    min = i;
    for(let j = i + 1;j < length;j++){
      array[j] < array[min] && (min = j)
    }
    min != i && swap(i, min, array)
  }
  return array
}

// 插入
function insertSort(array) {
  let length = array.length,index,current;
  for(let i = 1; i<length; i++) {
    index = i-1;  //待比较元素的下标
    current = array[i]; //当前元素
    while (index >= 0 && array[index] > current) {   //前置条件之一:待比较元素比当前元素大
      array[index+1] = array[index];  //将待比较元素后移一位
      index--;  //游标前移一位
    }
    if(index + 1 != i) {  //避免同一个元素赋值给自身
      array[index+1] = current
    }
  }
  return array;
}

function binaryInsertSort(array) {
  let current, i, j, low, high, m;
  for(i = 1; i<array.length; i++) {
    low = 0;
    high = i-1;
    current = array[i];
    while(low <= high) {
      m = (low + high) >> 1;
      if(array[i] >= array[m]) {
        low = m + 1;
      }else{
        high = m -1;
      }
    }
    for(j = i; j>low; j--) {
      array[j] = array[j-1];
    }
    array[low] = current;
  }
  return array
}
