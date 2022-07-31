import { Test, TestingModule } from '@nestjs/testing';
import { SnssubscriberController } from './snssubscriber.controller';

describe('SnssubscriberController', () => {
  let controller: SnssubscriberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SnssubscriberController],
    }).compile();

    controller = module.get<SnssubscriberController>(SnssubscriberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
