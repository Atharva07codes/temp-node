let {readFile}=require("fs")
console.log("Starting...")
readFile("./Atharva/First.txt","utf-8",(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log("Data Readed")
})
console.log("Ending...")