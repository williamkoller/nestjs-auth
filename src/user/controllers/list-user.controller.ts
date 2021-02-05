import { Controller, Get } from '@nestjs/common';
import { ListUserService } from '@/user/services/list-user.service';
import { User } from '@/user/model/user.model';

@Controller('users')
export class ListUserController {
  constructor(private readonly listUserService: ListUserService) {}

  @Get()
  async listUsers(): Promise<Array<User>> {
    return await this.listUserService.listUsers();
  }
}
