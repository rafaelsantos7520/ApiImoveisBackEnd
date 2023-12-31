import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({
    description: 'Título da propriedade',
    type: String,
    example: 'Casa aconchegante na praia',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    description: 'descriçâo da propriedade',
    type: String,
    example: 'Casa aconchegante na praia com varios quartos e piscina',
  })
  @IsString()
  @IsNotEmpty()
  descricao: string;

  @ApiProperty({
    description: 'Tamanho da propriedade em metros quadrados',
    type: Number,
    example: 150,
  })
  @IsNumber()
  @IsNotEmpty()
  tamanho: number;

  @ApiProperty({
    description: 'Número de quartos na propriedade',
    type: Number,
    example: 3,
  })
  @IsNumber()
  @IsNotEmpty()
  quartos: number;

  @ApiProperty({
    description: 'Número de banheiros na propriedade',
    type: Number,
    example: 3,
  })
  @IsNumber()
  @IsNotEmpty()
  banheiros: number;

  @ApiProperty({
    description: 'Valor da propriedade',
    type: Number,
    example: 250000,
  })
  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @ApiProperty({
    description: 'Cidade da propriedade',
    type: String,
    example: 'Rio de Janeiro',
  })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    description: 'bairro da propriedade',
    type: String,
    example: 'Leblom',
  })
  @IsString()
  @IsNotEmpty()
  bairro: string;

  @ApiProperty({
    description: 'quantidade de vagas de garagem',
    type: Number,
    example: 2,
  })
  @IsNumber()
  @IsNotEmpty()
  vagas_garagem: number;

  @ApiProperty({
    description: 'Fotos da propriedade',
    type: [String],
    isArray: true,
    required: false,
  })
  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  fotos?: string[] | null;

  @ApiProperty({
    description: 'Tipo da propriedade (casa ou apartamento)',
    type: String,
    enum: ['casa', 'apartamento'],
    example: 'casa',
  })
  @IsString()
  @IsNotEmpty()
  tipo: 'casa' | 'apartamento';

  // Adicione outros campos aqui com as mesmas anotações, se necessário.
}
