/*
 2  4  6  8 10 
12 14 16 18 20
22 24 26 28 30
32 34 36 38 40
42 44 46 48 50


*/

let pattern="";
let num=2;

for(let i=1;i<=5;i++){
  for(let j=1;j<=5; j++){
    if(num<=9){
      pattern+="  "+num
    }else{
      pattern+=" "+num
    }
    num+=2;
  }
  pattern+="\n"
}
console.log(pattern);