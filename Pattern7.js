/*
  1  3  5  7  9
 11 13 15 17 19
 21 23 25 27 29 
 31 33 35 37 39
 41 43 45 47 49

*/

let pattern="";
let num=1;

for(let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
    if(num<=9){
      pattern+="  " +num
    }else{
      pattern+=" "+num
    }
    num+=2
  }
  pattern+="\n"
}

console.log(pattern)