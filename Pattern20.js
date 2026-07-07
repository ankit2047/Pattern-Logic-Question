/*

1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1

*/

let pattern="";
for(let i=1;i<=5;i++){
  for(let j=0;j<5;j++){
    if(i%2!==0){
    pattern+=" "+(i+j)%2;
  }else{
    pattern+=" "+0;
  }
}
  pattern+="\n";
}
console.log(pattern)