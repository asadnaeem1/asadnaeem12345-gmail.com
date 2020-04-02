import { Controller, Get, Query } from '@nestjs/common';
import { UdemyService } from './udemy.service';

@Controller('udemy')
export class UdemyController {
  constructor(private _UdemyService: UdemyService) {}

  @Get('/course')
  async getCourseData(@Query('link') link: string) {
    const id = await this._UdemyService.getCourseNumber(link);
    return id;
  }

  @Get('/syllabus')
  async getCourseSyllabus(@Query('id') id: number) {
    const syllabus = await this._UdemyService.getCourseSyllabus(id);
    return syllabus;
  }
}
