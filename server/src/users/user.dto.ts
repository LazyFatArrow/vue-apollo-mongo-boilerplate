// import { IsEmail, MaxLength, MinLength } from 'class-validator';

export class UserDto {
  // @IsEmail()
  email: string;

  username: string;

  // @MaxLength(32)
  // @MinLength(8)
  password: string;
}