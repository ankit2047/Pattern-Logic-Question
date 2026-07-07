/*
 1 2 3 4 5
 2 3 4 5 6
 3 4 5 6 7
 4 5 6 7 8
 5 6 7 8 9

 */

 let pattern="";
let num;
 for(let i=1;i<=5;i++){
  for(let j=0;j<5;j++){
    pattern+=" "+(i+j);
  }
  pattern+="\n";
 }
 console.log(pattern)