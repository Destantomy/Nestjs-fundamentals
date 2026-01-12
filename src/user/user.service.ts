import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { hash } from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  // this register function is run asyncronously
  async register(dto: CreateUserDto) {
    const newUser = await this.prisma.user.create({
      data: {
        ...dto, // this will take all data inputted by using rest operator
        password: await hash(dto.password, 10), // hash data receive from dto, take the password data and hash it into 10 chars
      },
    });

    // return newUser;
    const { password, ...user } = newUser; // we divide it into some fragment, then send to return value all the data user except password
    return user;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      return user;
    }
    throw new NotFoundException('data not found');
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
