import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenModule } from './authen/authen.module';
import { ProfileModule } from './profile/profile.module';
import { NotificationModule } from './notification/notification.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthenModule, ProfileModule, NotificationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
