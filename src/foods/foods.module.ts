import { Module } from '@nestjs/common';
import { FoodsService } from './foods.service';
import { FoodsController } from './foods.controller';
import { foodProviders } from './foods.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [FoodsController],
  providers: [FoodsService, ...foodProviders],
})
export class FoodsModule {}
