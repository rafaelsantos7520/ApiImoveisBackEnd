import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreatePropertyDto {
  @IsNumber()
  @IsNotEmpty()
  quantidadeQuartos: number;

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

  @IsString()
  @IsNotEmpty()
  userId: string;
}
