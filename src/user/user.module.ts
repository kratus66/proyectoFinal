import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.servicie';
import { UserRepository } from './user.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UserModule {}