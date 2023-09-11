import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesRepository } from './repositories/properties.repositories';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(private propertyRepository: PropertiesRepository) {}

  async create(createPropertyDto: CreatePropertyDto) {
    if (
      createPropertyDto.tipo !== 'casa' &&
      createPropertyDto.tipo !== 'apartamento'
    ) {
      throw new BadRequestException(
        'o tipo espero deve ser casa ou apartamento',
      );
    }
    const propertie = await this.propertyRepository.create(createPropertyDto);
    return propertie;
  }

  async findAll(group: string | undefined) {
    return this.propertyRepository.findAll(group);
  }

  async findOne(id: string) {
    const findProperty = await this.propertyRepository.findOne(id);
    return findProperty;
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    const foudPropertie = await this.propertyRepository.findOne(id);
    if (!foudPropertie) {
      throw new NotFoundException('imovel não encontrado');
    }
    return this.propertyRepository.update(id, updatePropertyDto);
  }

  async remove(id: string) {
    const foudPropertie = await this.propertyRepository.findOne(id);
    if (!foudPropertie) {
      throw new NotFoundException('imovel não encontrado');
    }
    return this.propertyRepository.delete(id);
  }
}
