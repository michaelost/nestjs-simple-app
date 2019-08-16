import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
