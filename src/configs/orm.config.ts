import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '@/user/model/user.model';
require('dotenv').config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URI,
  database: process.env.MONGO_DATABASE,
  synchronize: true,
  entities: [User],
  useUnifiedTopology: true,
  useNewUrlParser: true,
};
