import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdatePropertyDto {
  @ApiProperty({
    description: 'Título da propriedade',
    type: String,
    example: 'Casa aconchegante na praia',
    required: false, // Tornando este campo opcional para atualização
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  titulo?: string;

  @ApiProperty({
    description: 'Tamanho da propriedade em metros quadrados',
    type: Number,
    example: 150,
    required: false, // Tornando este campo opcional para atualização
  })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  tamanho?: number;

  @ApiProperty({
    description: 'Número de quartos na propriedade',
    type: Number,
    example: 3,
    required: false, // Tornando este campo opcional para atualização
  })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  quartos?: number;

  @ApiProperty({
    description: 'Valor da propriedade',
    type: Number,
    example: 250000,
    required: false, // Tornando este campo opcional para atualização
  })
  @IsNumber()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  valor?: number;

  @ApiProperty({
    description: 'Cidade da propriedade',
    type: String,
    example: 'Rio de Janeiro',
    required: false, // Tornando este campo opcional para atualização
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  cidade?: string;

  @ApiProperty({
    description: 'Fotos da propriedade',
    type: [String],
    isArray: true,
    required: false, // Tornando este campo opcional para atualização
  })
  @IsArray()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  fotos?: string[] | null;

  @ApiProperty({
    description: 'Tipo da propriedade (casa ou apartamento)',
    type: String,
    enum: ['casa', 'apartamento'],
    example: 'casa',
    required: false, // Tornando este campo opcional para atualização
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional() // Tornando este campo opcional para atualização
  tipo?: 'casa' | 'apartamento';

  // Adicione outros campos aqui com as mesmas anotações, se necessário.
}
