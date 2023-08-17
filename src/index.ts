import 'reflect-metadata';
import express from 'express';
import { router } from './routes'
import createConnection from './database'

createConnection();
const server = express();

server.use(express.json())
server.use(router)

server.listen(5000,()=>{
    console.log('Servidor online na porta 5000 http://localhost:5000/')
})




// function soma(numero: number){
//     return numero+1
// }
// console.log(soma(5))
