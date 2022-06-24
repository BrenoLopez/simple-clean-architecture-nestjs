import { UserAlreadyExist } from '@/core/domain/errors/user/user-already-exist';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '../../core/application/use-cases/user/create-user.use-case';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import { CreatedUserDto } from '../dtos/user/created-user.dto';

@Controller('users')
export class AppController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  async create(@Body() body: CreateUserDto): Promise<CreatedUserDto> {
    try {
      return await this.createUser.execute(body);
    } catch (error) {
      if (error instanceof UserAlreadyExist) {
        throw new BadRequestException(error.message);
      }
    }
  }
}
