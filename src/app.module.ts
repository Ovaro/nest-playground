import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthServiceService } from './auth-service/auth-service.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AuthServiceService],
})
export class AppModule {}
