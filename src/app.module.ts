import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, PropertiesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
