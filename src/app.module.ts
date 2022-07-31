import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnssubscribeModule } from './modules/sns-sub/snssubscribe.module';

@Module({
  imports: [SnssubscribeModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
