import { Test, TestingModule } from '@nestjs/testing';
import { SnssubscriberService } from './snssubscriber.service';

describe('SnssubscriberService', () => {
  let service: SnssubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnssubscriberService],
    }).compile();

    service = module.get<SnssubscriberService>(SnssubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
