import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './db/users.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Users') private usersModel: Model<Users>,
  ) {}

  newUser(user: object) {
    const newUser = new this.usersModel(user);
    return newUser.save();
  }

  jwtSign(userData: object) {
    return this.jwtService.sign(userData);
  }

  jwtVerify(authorizationHeader: string, returnBool?: boolean) {
    try {
      const user = this.jwtService.verify(authorizationHeader.split(' ')[1]);
      return { valid: true, user: !returnBool ? user : undefined };
    } catch (e) {
      return { valid: false };
    }
  }

  async getUserCourses(email: string) {
    const user = await this.usersModel.findOne({ email });
    if (user) {
      return user;
    } else {
      const newUser = new this.usersModel({ email });
      return newUser.save();
    }
  }
}
