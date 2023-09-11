import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { PropertiesRepository } from './repositories/properties.repositories';
import { PrismaService } from 'src/database/prisma.service';
import { PropertiePrismaRepository } from './repositories/prisma/property-prisma.repository';

@Module({
  controllers: [PropertiesController],
  providers: [
    PropertiesService,
    PrismaService,
    {
      provide: PropertiesRepository,
      useClass: PropertiePrismaRepository,
    },
  ],
})
export class PropertiesModule {}
