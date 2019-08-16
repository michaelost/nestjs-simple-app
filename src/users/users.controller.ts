import { Controller, Get } from '@nestjs/common';
import { User } from '../interfaces/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('/')
  findAll(): User[] {
    return this.usersService.getAllUsers();
  }

}
