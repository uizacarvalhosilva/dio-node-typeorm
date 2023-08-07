// function soma(numero: number){
//     return numero+1
// }
// console.log(soma(5))

import express, { Request, Response } from 'express';

const server = express();

server.get('/', (request, response) => {

    // Todas as funcionalidades

    return response.json({mensagem: 'Bem vindo a nossa API'})

})


server.get('/usuarios', (request : Request, response: Response) => { 
    
    return response.json([
        {
            nome: 'Uíza'
        },
        {
            nome: 'Brunno'
        },
        {
            nome: 'Urik'
        },
        {
            nome: 'Nath'
        }

    ])


})


server.listen(5000,()=>{
    console.log('Servidor online na porta 5000 http://localhost:5000/')
})
