/*
 
 5  6 15 16 25 
 4  7 14 17 24
 3  8 13 18 23
 2  9 12 19 22
 1 10 11 20 21
 
 */

 let pattern="";
for(let i=1;i<=5;i++){
  let x=5+i;
  let y=5-i+1
  for(let j=1;j<=5;j++){
    if(j%2==0){
      num=x;
      x+=5;
    }else{
      num=y;
      y+=5;
    }
    if(num<=9){
      pattern+="  "+num;
    }else{
      pattern+=" "+num;
    }
  }
  pattern+="\n";
}
console.log(pattern)