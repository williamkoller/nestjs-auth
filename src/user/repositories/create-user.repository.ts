import { EntityRepository, Repository } from 'typeorm';
import { User } from '@/user/model/user.model';
import { CreateUserDto } from '@/user/dtos/create-user.dto';
import { genSaltSync, hashSync } from 'bcrypt';

@EntityRepository(User)
export class CreateUserRepository extends Repository<User> {
  async createUser(data: CreateUserDto): Promise<User> {
    const salt = genSaltSync();
    const hashPassword = hashSync(data.password, salt);
    const userCreated = this.create({
      fullName: data.fullName,
      email: data.email,
      password: hashPassword,
    });
    return await this.save(userCreated);
  }
}
