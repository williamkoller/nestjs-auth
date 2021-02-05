import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/user/model/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';
import { ListUserService } from '@/user/services/list-user.service';
import { ListUserController } from '@/user/controllers/list-user.controller';
import { CreateUserRepository } from '@/user/repositories/create-user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, ListUserRepository, CreateUserRepository]),
  ],
  providers: [ListUserService],
  exports: [ListUserService],
  controllers: [ListUserController],
})
export class UserModule {}
