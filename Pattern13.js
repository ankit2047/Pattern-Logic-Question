/*

1 10 11 20 21 
2  9 12 19 22
3  8 13 18 23
4  7 14 17 24
5  6 15 16 25

*/
let pattern = "";
for(let i=1;i<=5;i++){
  let x=10-i+1
  let y=i;
  for(let j=1;j<=5;j++){
    if(j%2==0){
      num=x;
      x+=10
    }else{
      num=y;
      y+=10
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


// let pattern = "";
// for(let i=0;i<5;i++){
//   for(let j=0;j<5;j++){
//     let num;
//     if(j%2==0){
//       num=i+j*5+1;
//     }else{
//       num=(5-1-i)+j*5+1;
//     }
//     if(num<=9){
//       pattern+="  "+num;
//     }else{
//       pattern+=" "+num;
//     }
//   }
//   pattern+="\n";
// }
// console.log(pattern)

