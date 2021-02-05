import { Injectable } from '@nestjs/common';
import { User } from '../model/user.model';
import { ListUserRepository } from '@/user/repositories/list-user.repository';

@Injectable()
export class ListUserService {
  constructor(private readonly userRepository: ListUserRepository) {}

  async listUsers(): Promise<Array<User>> {
    return await this.userRepository.listUsers();
  }
}
