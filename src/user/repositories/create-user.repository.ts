import { EntityRepository, Repository } from 'typeorm';
import { User } from '@/user/model/user.model';
import { CreateUserDto } from '@/user/dtos/create-user.dto';

@EntityRepository(User)
export class CreateUserRepository extends Repository<User> {
  async createUser(data: CreateUserDto): Promise<User> {
    const userCreate = this.create(data);
    return await this.save(userCreate);
  }
}
