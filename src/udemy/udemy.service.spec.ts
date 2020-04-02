import { Test, TestingModule } from '@nestjs/testing';
import { UdemyService } from './udemy.service';

describe('UdemyService', () => {
  let service: UdemyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UdemyService],
    }).compile();

    service = module.get<UdemyService>(UdemyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
