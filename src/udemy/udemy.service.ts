import { Injectable, HttpService } from '@nestjs/common';

@Injectable()
export class UdemyService {
  constructor(private httpService: HttpService) {}

  async getCourseNumber(link: string) {
    try {
      const courseUniqueName = link.split('/course/');
      const response = await this.httpService
        .get(`https://www.udemy.com/api-2.0/courses/${courseUniqueName[1]}`)
        .toPromise();
      return { id: response.data.id };
    } catch (e) {
      throw `Error --> ${e}`;
    }
  }

  async getCourseSyllabus(id: number) {
    try {
      const response = await this.httpService
        .get(
          `https://www.udemy.com/api-2.0/course-landing-components/${id}/me/?components=curriculum`,
        )
        .toPromise();
      let syllabus = response.data.curriculum.data.sections.map(
        ({ title, lecture_count, content_length_text, items }) => ({
          title,
          lecture_count,
          content_length_text,
          items: items.map(({ item_type, title, content_summary }) => ({
            item_type,
            title,
            content_summary,
          })),
        }),
      );
      return syllabus;
    } catch (e) {
      throw `Error --> ${e}`;
    }
  }
}
