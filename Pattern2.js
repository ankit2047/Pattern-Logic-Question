/*
  1 1 1 1 1
  2 2 2 2 2
  3 3 3 3 3
  4 4 4 4 4
  5 5 5 5 5

*/

let pattern="";
let row=5;
let col=5;
for(let i=1; i<=row;i++){
  for(let j=col;j>=1;j--){
    pattern+=" "+i;
  }
  pattern+="\n"
}
console.log(pattern);