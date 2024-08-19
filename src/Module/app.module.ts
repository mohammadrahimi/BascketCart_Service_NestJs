import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { BascketController } from 'src/Presentation/Api/controller/bascket.controller';
import { BascketService } from 'src/Application/service/BascketService';
import { RedisRepository } from 'src/Infrastructure/repository/redis.repository';
 
 

@Module({
  imports: [ 
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => ({
        store: redisStore,
        host: "127.0.0.1",
        port:"6379"
      }),
    }),
        
  ],
  controllers: [BascketController],
  providers: [BascketService,RedisRepository],
})
export class AppModule {}
