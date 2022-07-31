import { Injectable } from '@nestjs/common';
import { SNSClient } from '@aws-sdk/client-sns';
import { SESClient } from '@aws-sdk/client-ses';

@Injectable()
export class AwsService {
  private readonly accessKeyID = 'YOUR AWS ACCESS KEY ID';
  private readonly secretAccessKey = 'YOUR AWS SECRET KEY';
  private readonly region = 'YOUR AWS REGION';

  get sns(): SNSClient {
    return new SNSClient({
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyID,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }

  get ses(): SESClient {
    return new SESClient({
      region: this.region,
      credentials: {
        accessKeyId: this.accessKeyID,
        secretAccessKey: this.secretAccessKey,
      },
    });
  }
}
