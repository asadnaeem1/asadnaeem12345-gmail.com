import { Controller, Get, Body, Post, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('gettoken')
  getToken(@Body('user') user: object) {
    return { token: this.authService.jwtSign(user) };
  }

  @Get('verifytoken')
  verifyToken(@Headers('authorization') authorizationHeader) {
    return this.authService.jwtVerify(authorizationHeader, true);
  }

  @Get('getuser')
  getUser(@Headers('authorization') authorizationHeader) {
    return this.authService.jwtVerify(authorizationHeader);
  }
  @Get('getuser/courses')
  getUserCourses(@Body('email') email: string) {
    return this.authService.getUserCourses(email);
  }
}
