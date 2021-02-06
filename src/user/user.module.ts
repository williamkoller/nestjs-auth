import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/models/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';
import { ListUserService } from '@/user/services/list-user.service';
import { ListUserController } from '@/user/controllers/list-user.controller';
import { CreateUserRepository } from '@/user/repositories/create-user.repository';
import { CreateUserService } from '@/user/services/create-user.service';
import { findUserByEmailRepository } from '@/user/repositories/find-user-by-email.repository';
import { CreateUserController } from '@/user/controllers/create-user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      ListUserRepository,
      CreateUserRepository,
      findUserByEmailRepository,
    ]),
  ],
  providers: [ListUserService, CreateUserService],
  exports: [ListUserService, CreateUserService],
  controllers: [ListUserController, CreateUserController],
})
export class UserModule {}
