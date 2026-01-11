let { readFileSync,writeFileSync}=require('fs')
 
let first=readFileSync('./Atharva/First.txt','utf8')
let second=readFileSync('./Atharva/Second.txt','utf8')
// console.log(first,second)

writeFileSync('./Atharva/New.txt',`This is new file containg both previous files \n${first} \n${second}`,{flag:'a'})