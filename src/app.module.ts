import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodsModule } from './foods/foods.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './foods/entities/food.entity';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [FoodsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
