/*

1 0 1 0 1
0 1 0 1 0
1 0 1 0 1
0 1 0 1 0
1 0 1 0 1

*/

let pattern="";
for(let i=1;i<=5;i++){
  for(let j=0;j<5;j++){
    pattern+=" "+(i+j)%2;
  }
  pattern+="\n";
}
console.log(pattern)