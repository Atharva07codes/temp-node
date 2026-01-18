let EventEmitter= require("events")
let customEmitter= new EventEmitter()
customEmitter.on('responce',(name,id)=>{
    console.log(`data received of user ${name} with id: ${id}`)
})
customEmitter.on('responce',()=>{
    console.log('data sended ...')
})
customEmitter.emit('responce','atharva',777)