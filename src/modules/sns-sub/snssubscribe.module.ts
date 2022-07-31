import { Module } from '@nestjs/common';
import { AwsService } from 'src/shared/services/aws.service';
import { SnssubscriberController } from './controllers/snssubscriber.controller';
import { SnssubscriberService } from './services/snssubscriber.service';

@Module({
    controllers:[SnssubscriberController],
    providers:[SnssubscriberService,AwsService],
})
export class SnssubscribeModule {}
