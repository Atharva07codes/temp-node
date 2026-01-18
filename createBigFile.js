let {writeFileSync}=require('fs')
for(let i=1;i<=10000;i++){
    writeFileSync('./Atharva/BigFile.txt', `Hello World!!! ${i}\n`,{flag:'a'})
}