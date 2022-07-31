import { SendEmailCommand } from '@aws-sdk/client-ses';
import { ConfirmSubscriptionCommand } from '@aws-sdk/client-sns';
import { Injectable } from '@nestjs/common';
import { AwsService } from 'src/shared/services/aws.service';

@Injectable()
export class SnssubscriberService {
  constructor(private readonly awsService: AwsService) { }

  async subscriptionConfirmation(token: string, topicARN: string) {
    let confirmSubParams = new ConfirmSubscriptionCommand({ Token: token, TopicArn: topicARN })
    this.awsService.sns.send(confirmSubParams);
  }

  async snsNotification(notificationDetails: any) {
    
    console.log("Notification Received => ", notificationDetails);

    const { Subject, Message, MessageAttributes } = notificationDetails;
    if (Subject === 'Send OTP') {
      
      const { email, otp } = MessageAttributes;

      console.log("SNS Message Attributes => ",email,otp)
      
      let emailCommand = new SendEmailCommand({
        Destination: {ToAddresses: [email.Value]},
        Message: {
          Body: { Html: { Data: `<h1>OTP Generated</h1> \n You OTP is <b>${otp.Value}</b>` } },
          Subject: { Data: 'Flex OTP Email' }
        },
        Source: 'muiz.meer@netsoltech.com',
      });
      
      console.log("start Sending EMail... ");
      this.awsService.ses.send(emailCommand)
      .then(res => console.log("Email sending response => ", res))
      .catch(err => console.log("Email sending Error => ", err));
    }
  }

}
