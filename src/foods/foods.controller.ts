import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FoodsService } from './foods.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';

@Controller('foods')
export class FoodsController {
  constructor(private readonly foodsService: FoodsService) {}

  @Post()
  async create(@Body() createFoodDto: CreateFoodDto) {
    return await this.foodsService.create(createFoodDto);
  }

  @Get()
  async findAll() {
    return await this.foodsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.foodsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
    return await this.foodsService.update(+id, updateFoodDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.foodsService.remove(+id);
  }
}
