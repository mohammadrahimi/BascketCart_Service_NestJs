import { Inject, Injectable } from '@nestjs/common';
import { RedisRepository } from '../../Infrastructure/repository/redis.repository';
import { Bascket } from 'src/Domain/bascket';

 

@Injectable()
export class BascketService {
    constructor(@Inject(RedisRepository) private readonly redisRepository: RedisRepository) {}

    async Insert(bascket: Bascket): Promise<void> {
        if(bascket.products == null){
            console.log("products is empty");
            return null;
        }
        await this.redisRepository.Save(bascket.Id,JSON.stringify(bascket));
    }

    async All(bascketId: string): Promise<Bascket | null> {
        const bascket = await this.redisRepository.Get(bascketId);
        return JSON.parse(bascket);
    }

    async Delete(bascketId: string): Promise<void> {
        return await this.redisRepository.Delete(bascketId);
    }

    async Update(bascket: Bascket): Promise<void> {
        if(bascket.products == null){
            console.log("products is empty");
            return null;
        }
        await this.redisRepository.Save(bascket.Id,JSON.stringify(bascket));
    }
 
}