import { Module, HttpModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UdemyController } from './udemy.controller';
import { UdemyService } from './udemy.service';

@Module({
  imports: [HttpModule, JwtModule.register({ secret: process.env.JWT_SECRET })],
  controllers: [UdemyController],
  providers: [UdemyService],
})
export class UdemyModule {}
