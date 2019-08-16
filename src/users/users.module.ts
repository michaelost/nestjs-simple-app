import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersSchema } from './schemas/user';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
