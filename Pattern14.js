/*
 5 10 15 20 25
 4  9 14 19 24
 3  8 13 18 23
 2  7 12 17 22
 1  6 11 16 21

*/

let pattern="";
for(let i=1;i<=5;i++){
  let num=5-i+1
  for(let j=1;j<=5;j++){
    if(num<=9){
      pattern+="  "+num;
    }else{
      pattern+=" "+num;
    }
    num+=5;
  }
  pattern+="\n";
}
console.log(pattern)