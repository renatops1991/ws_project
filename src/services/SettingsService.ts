import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    username: string,
    chat: boolean
}

class SettingsService{
    private settingsRepository: Repository<Setting>;

    constructor(){
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ username, chat }: ISettingsCreate) {

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }
    
        const settings = this.settingsRepository.create({
            username,
            chat
        });
    
       await this.settingsRepository.save(settings);

       return settings;
    }
}

export { SettingsService }
