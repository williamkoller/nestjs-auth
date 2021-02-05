import { EntityRepository, Repository } from 'typeorm';
import { User } from '../model/user.model';

@EntityRepository(User)
export class findUserByEmailRepository extends Repository<User> {
  async findUserByEmail(email: string): Promise<User> {
    return await this.findOne({ where: email });
  }
}
