import { IsNotEmpty, IsNumber } from 'class-validator';

export class RequestSseDto {
  @IsNumber()
  @IsNotEmpty()
  id!: number;
}
