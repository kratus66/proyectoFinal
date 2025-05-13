
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.servicie';

@Controller()
export class UserController {
  constructor(private readonly appService: UserService) {}

  
}
