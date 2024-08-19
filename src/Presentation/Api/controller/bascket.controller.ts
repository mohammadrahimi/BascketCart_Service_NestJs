import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { BascketService } from 'src/Application/service/BascketService';
import { Bascket } from 'src/Domain/bascket';
import {  DtoBascketId } from 'src/Presentation/Dto/DtoBascketId';
 

@Controller('bascket')
export class BascketController {
  constructor(private readonly bascketService: BascketService) {}

    @Get('/:bascketId')
    async get(@Param() param: DtoBascketId): Promise<Bascket> {
       return await this.bascketService.All(param.bascketId);
    }
    
    @Post('insert')
    async insert(@Body() bascket: Bascket): Promise<void> {
         await this.bascketService.Insert(bascket);
    }

    @Post('update')
    async update(@Body() bascket:  Bascket): Promise<void> {
          await this.bascketService.Update(bascket);
    }

    @Put('/:bascketId')
    async delete(@Param() param: DtoBascketId): Promise<void> {
         await this.bascketService.Delete(param.bascketId);
    }
}
