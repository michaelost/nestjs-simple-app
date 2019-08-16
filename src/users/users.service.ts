import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  private readonly users: User[] = [];

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
