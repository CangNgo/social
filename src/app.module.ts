import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenModule } from './authen/authen.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthenModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
