import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@/user/model/user.model';
import { CreateUserDto } from '@/user/dtos/create-user.dto';
import { CreateUserService } from '@/user/services/create-user.service';

@Controller('user')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    return await this.createUserService.createUser(data);
  }
}
