import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { AuthModule } from './modules/auth/auth.module';
import { CorsModule } from '@nestjs/common';

@Module({
  imports: [
    UsersModule,
    PropertiesModule,
    AuthModule,
    CorsModule.forRoot({
      origin: 'http://localhost:3000', // Substitua com o domínio do seu frontend em produção
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
      credentials: true, // Permite enviar cookies
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
