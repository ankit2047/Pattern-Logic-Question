/*

  1  6 11 16 21
  2  7 12 17 22
  3  8 13 18 23
  4  9 14 19 24
  5 10 15 20 25

*/

let pattern="";
for(let i=1;i<=5;i++){
  let num=i
  for(j=1;j<=5;j++){
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