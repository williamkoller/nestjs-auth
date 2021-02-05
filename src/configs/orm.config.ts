import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URI,
  database: process.env.MONGO_DATABASE,
  synchronize: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  autoLoadEntities: true,
};
