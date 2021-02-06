import { EntityRepository, Repository } from 'typeorm';
import { User } from '@/models/user.model';

@EntityRepository(User)
export class ListUserRepository extends Repository<User> {
  async listUsers(): Promise<Array<User>> {
    return await this.find();
  }
}
