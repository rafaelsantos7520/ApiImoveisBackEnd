import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { hashSync } from 'bcrypt';

export class UpdateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    type: String,
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Email do usuário',
    type: String,
    example: 'example@example.com',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'Senha do usuário',
    type: String,
    example: 'password123',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @IsOptional()
  @Transform(({ value }: { value: string }) => hashSync(value, 10), {
    groups: ['transform'],
  })
  password?: string;
}
