import { Request, Response } from 'express';
import { CreateUsersService } from '../services/CreateUsersService';

class CreateUsersController{
    handle(request: Request, response : Response){

        const createUsersService = new CreateUsersService();

        const nome = request.body.nome;
        const email = request.body.email;

        if(nome.length === 0 || email.length === 0){
            return response.status(400).json({mensagem : 'Preencha todos os dados'})
        }
        const user = createUsersService.execute({nome, email})

        return response.status(201).json({user})
    }

}

export { CreateUsersController }

