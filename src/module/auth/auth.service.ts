import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: LoginDTO) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: SignUpDTO) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
