/*

0 1 0 1 0
0 0 0 0 0
0 1 0 1 0
0 0 0 0 0
0 1 0 1 0

*/

let pattern='';
for(let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
    if(j%2!==0){
      pattern+=" "+0;
    }else{
      pattern+=" "+(i+j)%2
    }
  }
  pattern+="\n";
}
console.log(pattern)