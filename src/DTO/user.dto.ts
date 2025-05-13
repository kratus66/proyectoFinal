import { IsString, Length, IsEnum } from 'class-validator';
import { Role } from 'src/decorator/roles.enum';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  @Length(6, 20)
  password: string;

  @IsEnum(Role)
  role: Role;
}
