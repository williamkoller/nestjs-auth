import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserRepository } from '@/user/repositories/create-user.repository';
import { CreateUserDto } from '@/user/dtos/create-user.dto';
import { User } from '@/models/user.model';
import { findUserByEmailRepository } from '@/user/repositories/find-user-by-email.repository';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly findUserByEmail: findUserByEmailRepository,
  ) {}

  async createUser(data: CreateUserDto): Promise<User> {
    const userFound = await this.findUserByEmail.findUserByEmail(data.email);
    if (userFound) {
      throw new BadRequestException(
        `A user already exists with this ${JSON.stringify(userFound.email)}.`,
      );
    }
    return await this.createUserRepository.createUser(data);
  }
}
