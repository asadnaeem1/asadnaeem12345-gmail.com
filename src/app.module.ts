import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UdemyModule } from './udemy/udemy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://asadnaeem:asadnaeem1@cluster0-e7uqv.mongodb.net/employeedevelopment?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    AuthModule,
    UdemyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
