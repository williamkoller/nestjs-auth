import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      autoLoadEntities: true,
    }),
    forwardRef(() => UserModule),
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
