import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { hashPasswordTransform } from '@/common/lib/bcrypt/bcrypt';

@Unique(['email'])
@Entity('users')
export class User {
  @ObjectIdColumn()
  _id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ transformer: hashPasswordTransform })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
