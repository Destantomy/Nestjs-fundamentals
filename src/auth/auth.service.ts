import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(dto: AuthDto) {
    const user = await this.userService.findByEmail(dto.email);
    if (user) {
      const { password, ...result } = user; // take password and all the data (using ...result) from user
      return result;
    }

    throw new UnauthorizedException();
  }
}
