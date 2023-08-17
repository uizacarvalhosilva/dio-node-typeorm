import { Router , Request, Response} from 'express';
import { CreateUsersController } from './controllers/CreateUsersController';


const router = Router();
const createUsersController = new CreateUsersController();


router.get('/usuarios', (request: Request, response : Response) => {

    return response.json({mensagem: 'Bem vindo a nossa API'})

})


router.post('/usuarios', createUsersController.handle)

export { router }
