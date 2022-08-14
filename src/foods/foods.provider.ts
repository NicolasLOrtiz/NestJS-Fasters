import { Connection } from 'typeorm';
import { Food } from './entities/food.entity';

export const foodProviders = [
  {
    provide: 'FOOD_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Food),
    inject: ['DATABASE_CONNECTION'],
  },
];
