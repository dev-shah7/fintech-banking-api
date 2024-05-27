import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get('/:id')
  async getUser(@Res() response, @Param('id') userId: string) {
    const user = await this.usersService.findById(userId);
    return response.status(HttpStatus.OK).json({
      message: 'User found successfully',
      user,
    });
  }

  @Put('/:id')
  async updateUser(
    @Res() response,
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.updateUser(userId, updateUserDto);
    return response.status(HttpStatus.OK).json({
      message: 'User updated successfully',
      user,
    });
  }
  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: string) {
    const user = await this.usersService.deleteUser(userId);
    return response.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      user,
    });
  }
}
