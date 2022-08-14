import { Food } from 'src/foods/entities/food.entity';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        database: 'fasters',
        entities: [Food],
        synchronize: true,
      }),
  },
];
