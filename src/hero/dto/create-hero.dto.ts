import { IsAlpha, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateHeroDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsAlpha()
  name: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}
