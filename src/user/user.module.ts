import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/user/model/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';
import { ListUserService } from '@/user/services/list-user.service';
import { ListUserController } from '@/user/controllers/list-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, ListUserRepository])],
  providers: [ListUserService],
  exports: [ListUserService],
  controllers: [ListUserController],
})
export class UserModule {}
