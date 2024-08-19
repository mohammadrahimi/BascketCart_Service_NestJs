import { Inject, Injectable } from '@nestjs/common';
import { IRepositoryRedis } from './IRepositoryRedis';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
 
 
@Injectable()
export class RedisRepository implements  IRepositoryRedis {
    constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
    
    async Get(key: string): Promise<string> {
        var data = await this.cacheManager.get(key);
        return String(data);
    }

    async Save(key: string, value: string): Promise<void> {
        await this.cacheManager.set(key, value,1209600000); // ttl = 1209600000 is  14 days
    }

    async Delete(key: string): Promise<void> {
        await this.cacheManager.del(key);
    }

 
}