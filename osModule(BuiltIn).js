let os= require('os');
let user =os.userInfo()
// console.log(user)//info about current user 
// console.log(`the laptop upTime is${os.uptime()} sec`)//uptime of the system 
let infoOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(infoOS)