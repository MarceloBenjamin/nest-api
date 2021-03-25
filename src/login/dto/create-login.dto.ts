import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  user: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  password: string;
}
