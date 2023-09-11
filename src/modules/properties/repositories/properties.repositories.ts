import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { Property } from '../entities/property.entity';

export abstract class PropertiesRepository {
  abstract create(data: CreatePropertyDto): Promise<Property> | Property;
  abstract findAll(group: string | undefined): Promise<Property[] | object>;
  abstract delete(id: string): Promise<void> | void;
  abstract findOne(id: string): Promise<Property> | undefined | Property;
  abstract update(
    id: string,
    data: UpdatePropertyDto,
  ): Promise<Property> | Property;
}
