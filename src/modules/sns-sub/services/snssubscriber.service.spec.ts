import { Test, TestingModule } from '@nestjs/testing';
import { SnssubscriberService } from './snssubscriber.service';
import { AwsService } from '../../../shared/services/aws.service';

describe('SnssubscriberService', () => {
  let service: SnssubscriberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnssubscriberService, AwsService],
    }).compile();

    service = module.get<SnssubscriberService>(SnssubscriberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
