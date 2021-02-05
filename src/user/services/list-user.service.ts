import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../model/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';

@Injectable()
export class ListUserService {
  constructor(private readonly userRepository: ListUserRepository) {}

  async listUsers(): Promise<Array<User>> {
    const users = await this.userRepository.listUsers();
    if (users.length === 0) {
      throw new NotFoundException('No users found.');
    }
    return users;
  }
}
