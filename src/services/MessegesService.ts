import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepository"

interface IMessageCreate {
    user_id: string
    text: string,
    admin_id?: string,
}

class MessagesService {
    private messagesRepository: Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessagesRepository);
    }

    async create({ user_id, text, admin_id }: IMessageCreate){

        const message = this.messagesRepository.create({
            user_id,
            text,
            admin_id
        });

        await this.messagesRepository.save(message);

        return message;
    }

    async listByUser(user_id: string){

        const list = await this.messagesRepository.find({
            where: { user_id },
            relations: ["user"]
        });

        return list;
    }
}

export { MessagesService }
