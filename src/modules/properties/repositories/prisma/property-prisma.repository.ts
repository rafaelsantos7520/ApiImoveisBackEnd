import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from '../properties.repositories';
import { CreatePropertyDto } from '../../dto/create-property.dto';
import { UpdatePropertyDto } from '../../dto/update-property.dto';
import { Property } from '../../entities/property.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PropertiePrismaRepository implements PropertiesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreatePropertyDto): Promise<Property> {
    const propertie = new Property();
    Object.assign(propertie, {
      ...data,
    });

    const newProperty = await this.prisma.property.create({
      data: {
        id: propertie.id,
        quantidadeQuartos: propertie.quantidadeQuartos,
        valor: propertie.valor,
        cidade: propertie.cidade,
        fotos: propertie.fotos,
        tipo: propertie.tipo,
        userId: propertie.userId,
      },
    });

    return newProperty;
  }

  private groupBy(properties: Property[], key: string) {
    return properties.reduce((acc, curr) => {
      (acc[curr[key]] = acc[curr[key]] || []).push(curr);
      return acc;
    }, {});
  }

  async findAll(group: string): Promise<object | Property[]> {
    const properties = await this.prisma.property.findMany();
    if (group) {
      return this.groupBy(properties, group);
    }
    return properties;
  }

  async findOne(id: string): Promise<Property> {
    const propertie = await this.prisma.property.findUnique({
      where: { id },
    });
    return propertie;
  }

  async update(id: string, data: UpdatePropertyDto): Promise<Property> {
    const updatePropertie = await this.prisma.property.update({
      where: { id },
      data,
    });
    return updatePropertie;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}