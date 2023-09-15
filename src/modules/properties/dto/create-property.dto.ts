import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsNumber()
  @IsNotEmpty()
  tamanho: number;

  @IsNumber()
  @IsNotEmpty()
  quartos: number;

  @IsNumber()
  @IsNotEmpty()
  valor: number;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  fotos?: string[] | null;

  @IsString()
  @IsNotEmpty()
  tipo: 'casa' | 'apartamento';
}
