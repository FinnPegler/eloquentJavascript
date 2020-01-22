//1.1

let range = (start, end) => {
let arr = [];
for (let i = start; i <= end; i++) {
  arr.push(i);
}
return arr;
}

//1.2
let sum = (start, end) => {
let count =0;
for (let i = start; i <= end; i++) {
  count += i;
}
return count;
}

//1.3
let range = (start, end, step = start <= end ? 1 : -1) => {
  let arr = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    if (!step) {step == -1}
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
};

//2.1 
let reverseArray = function (arr) {
let newArr = [];
for (let item in arr){
newArr.unshift(arr[item]);
}
return newArr
}

//2.2 
let reverseArray = function (arr) {
let newArr = arr;
for (let i = 0;i < Math.floor(arr.length/2); i++){
temp = arr[arr.length-i-1]
newArr[arr.length-i-1] = arr[i];
newArr[i] = temp;
}
return newArr
}

3. 
let arrayToList = (arr) => {
    let list = null;
    for (let i = arr.length-1; i >= 0 ; i--){
    list = {value: arr[i], rest: list}
    }
  return list;
}

function listToArray(list) {
  var array = [];
    for (let i = list; i; i = i.rest){
      array.push(i.value);
    }
    return array;
}

function prepend(val, list){
  return {value:val, rest: list};
}

//non recursive solution
function nth(list, val){
  let count = 0;
  for (let i = list;i; i = i.rest){
    if (count == val){console.log(i.value); return}
    else count++;
  }
}

//recursive solution
function nth(list, val){
    if (!list){return undefined}
    else if (val == 0) {return list.value}
    else return nth(list.rest, val-1)
      }

//4. Deep Equal

function deepEqual (a,b){
  if (typeof a == "object" && a != null && typeof b == "object" && b != null){
      if (Object.keys(a).length != Object.keys(b).length) {console.log("1"); return false} 
      else for (let i = 0; i < Object.keys(a).length;i++) {
          if (Object.keys(a)[i] != Object.keys(b)[i]) {console.log("2"); return false}
          else return deepEqual(a[Object.keys(a)[i]], b[Object.keys(b)[i]])
      } 
    } 
  else {return a === b}  
  }
