import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [LoginModule, ClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
