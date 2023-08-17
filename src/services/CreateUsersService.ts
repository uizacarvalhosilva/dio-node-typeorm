interface IUsuario {
    nome : string,
    email: string
}

class CreateUsersService{
    execute({nome, email}:IUsuario){
        const data = [];

        data.push({nome, email});

        return data;
    }
}

export { CreateUsersService }