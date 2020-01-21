1. Minimum

let minim = (a,b) => {
  if  (a < b) { return a}
  else return b
}

2. Recursion

let isEven = (a) => {
  if (a < 0) {document.write("Please use positive integers only")}
  else if (a == 0) {return true;}
  else if (a == 1) {return false;}
  else return (isEven(a-2)) 
  }
isEven(5000)

3. Bean Counter

let countBs = (a, b) => {
  let count = 0, i = 0;
  for (i = 0; i < a.length; i++)
    if (a[i] == b) {
      count += 1;
 
    }
   
    return count
  } 
