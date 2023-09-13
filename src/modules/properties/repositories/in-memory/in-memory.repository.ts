import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from '../properties.repositories';
import { CreatePropertyDto } from '../../dto/create-property.dto';
import { Property } from '../../entities/property.entity';

@Injectable()
export class PropertieInMemoryRepository implements PropertiesRepository {
  private database: Property[] = [];
  async create(data: CreatePropertyDto, userId: string): Promise<Property> {
    const newPropertie = new Property();
    Object.assign(newPropertie, {
      ...data,
      userId: userId,
    });
    this.database.push(newPropertie);
    return newPropertie;
  }
  private groupBy(properties: Property[], key: string) {
    return properties.reduce((acc, curr) => {
      (acc[curr[key]] = acc[curr[key]] || []).push(curr);
      return acc;
    }, {});
  }
  async findAll(group: string): Promise<Property[] | object> {
    if (group) {
      return this.groupBy(this.database, group);
    }
    return this.database;
  }

  async findOne(id: string): Promise<Property> {
    const property = this.database.find((property) => property.id === id);
    return property;
  }
  update(id: string, data: CreatePropertyDto): Promise<Property> | Property {
    const property = this.database.find((property) => property.id === id);
    Object.assign(property, data);
    return property;
  }
  delete(id: string): void | Promise<void> {
    const userIndex = this.database.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
      this.database.splice(userIndex, 1);
    }
  }
}
