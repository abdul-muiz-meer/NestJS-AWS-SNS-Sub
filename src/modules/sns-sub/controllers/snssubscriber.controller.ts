import {
  Body,
  Controller,
  Headers,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { SnssubscriberService } from '../services/snssubscriber.service';
import * as rawbody from 'raw-body';

@Controller('snssubscriber')
export class SnssubscriberController {
  constructor(private readonly snssubscriber: SnssubscriberService) {}

  @Post('subscription')
  async SNSSbscriptions(
    @Headers() headers: any,
    @Param() params: any,
    @Query() query: any,
    @Body() requestDetail: any,
    @Req() req,
  ) {
    console.log('Notification End Point called');
    let body: any;
    if (req.readable) {
      // body is ignored by NestJS -> get raw body from request
      const raw = await rawbody(req);
      const text = raw.toString().trim();
      body = JSON.parse(text);
      console.log('body:', body);
    } else {
      body = JSON.parse(requestDetail);
      // body is parsed by NestJS
      console.log('data:', requestDetail);
    }

    if (
      headers['x-amz-sns-message-type'] == 'SubscriptionConfirmation' &&
      headers['x-amz-sns-topic-arn']
    ) {
      this.snssubscriber.subscriptionConfirmation(
        body.Token,
        headers['x-amz-sns-topic-arn'],
      );
    } else if (headers['x-amz-sns-message-type'] == 'Notification') {
      this.snssubscriber.snsNotification(body);
    } else {
      throw new HttpException(
        'Invalid Request either message type not specified or Topic ARN is invalid',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
