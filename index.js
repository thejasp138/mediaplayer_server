//importing json-server pakage
const JSONserver=require('json-server')

//create server using create() mmethode from json-server

const MPserver=JSONserver.create()

//generating path/route to server resource

const router=JSONserver.router('db.json')

//const middileware=json-server middilewares

const middileware=JSONserver.defaults()

//creae port number for server

const PORT=3000 | process.env.PORT

//implimenting middileware to server 

MPserver.use(middileware)


//implimenting route to resource to server 

MPserver.use(router)


//run command for server

MPserver.listen(PORT,()=>{
    console.log(`server is running at:${PORT}`)

})

