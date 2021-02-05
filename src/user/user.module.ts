import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@/user/model/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';
import { UserService } from '@/user/services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, ListUserRepository])],
  providers: [UserService],
})
export class UserModule {}
