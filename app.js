// const os = require('os')
const colors = require('colors')
// // const fs = require('fs')
// // // console.log(os.release());

// // // fs.writeFile('./texto.txt','linea uno.',(err)=>{
// // //     return err? console.log(err) : console.log("archivo creado");
// // // }) 

// // fs.readFile('./texto.txt',(err,res) =>{
// //     return err? console.log(err): console.log(res.toString());
// // })

// const http = require('http')

// const handleServer = (req,res) => {
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.write('Hola Mundo.')
//     res.end()
// }

// const server = http.createServer(handleServer)
// server.listen(8000, ()=>{
//     console.log("server on port 8000".green)
// })

const express = require('express')

const server = express()

server.get('/',(req,res)=>{
    res.send('<h1>Hola mundo con Express y node</h1>')
    res.end()
})

server.listen(3000, ()=> {
    console.log("Server on port 3000".green)
})
