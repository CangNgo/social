import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { SignUpDTO } from './dto/sign-up.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TokenResponseVO } from './vo/token-response.vo';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiOperation({
    description: 'API for user login',
  })
  @ApiResponse({
    status: 200,
    type: TokenResponseVO,
  })
  @Post('login')
  login(@Body() createAuthDto: LoginDTO) {
    return this.authService.create(createAuthDto);
  }

  @Post('sign-up')
  signUp(@Body() createAuthDto: SignUpDTO) {
    return this.authService.create(createAuthDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: SignUpDTO) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
