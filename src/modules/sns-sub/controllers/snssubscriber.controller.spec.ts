import { Test, TestingModule } from '@nestjs/testing';
import { SnssubscriberController } from './snssubscriber.controller';
import { AwsService } from '../../../shared/services/aws.service';
import { SnssubscriberService } from '../services/snssubscriber.service';

describe('SnssubscriberController', () => {
  let controller: SnssubscriberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnssubscriberController],
      providers: [AwsService, SnssubscriberService],
    }).compile();

    controller = module.get<SnssubscriberController>(SnssubscriberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
