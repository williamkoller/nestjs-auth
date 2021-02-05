import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  fullName: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'This field cannot be empty.' })
  password: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
