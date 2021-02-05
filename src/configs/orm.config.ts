import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_DB,
  synchronize: true,
  entities: ['src/**/**/*.ts'],
  useUnifiedTopology: true,
  logger: 'debug',
};
