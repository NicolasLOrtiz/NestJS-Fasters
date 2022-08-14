import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { Food } from './entities/food.entity';

@Injectable()
export class FoodsService {
  constructor(
    @Inject('FOOD_REPOSITORY')
    private foodRepository: Repository<Food>,
  ) {}

  async create(createFoodDto: CreateFoodDto): Promise<Food> {
    const food = this.foodRepository.create(createFoodDto);

    return await this.foodRepository.save(food);
  }

  async findAll(): Promise<Food[]> {
    return await this.foodRepository.find();
  }

  async findOne(id: number): Promise<Food> {
    return this.foodRepository.findOneOrFail(id);
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    const food = await this.foodRepository.findOneOrFail(id);

    food.name = updateFoodDto.name;
    food.description = updateFoodDto.description;
    food.price = updateFoodDto.price;
    food.image = updateFoodDto.image;

    return await this.foodRepository.save(food);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.foodRepository.delete(id);
  }
}
