import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository"


class UsersServices {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string){
        
        const usersExists = await this.usersRepository.findOne({
            email
        });

        if(usersExists){
          throw new Error("User alredy Exists");
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersServices }
