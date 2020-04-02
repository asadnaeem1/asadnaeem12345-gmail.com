import { Test, TestingModule } from '@nestjs/testing';
import { UdemyController } from './udemy.controller';

describe('Udemy Controller', () => {
  let controller: UdemyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UdemyController],
    }).compile();

    controller = module.get<UdemyController>(UdemyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
