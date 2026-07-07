/*
 1  3  5  7  9
 3  5  7  9 11
 5  7  9 11 13
 7  9 11 13 15
 9 11 13 15 17
  
*/

let pattern="";

for(let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
    let num=2*(i+j)-3;
    if(num<=9){
      pattern+="  "+num;
    }else{
      pattern+=" "+num;
    }
  }
  pattern+="\n";
}
console.log(pattern)