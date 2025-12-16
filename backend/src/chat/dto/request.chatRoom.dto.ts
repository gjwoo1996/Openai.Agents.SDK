import { IsNotEmpty, IsNumber } from 'class-validator';

export class ResponseChatRoomDto {
  @IsNumber()
  @IsNotEmpty()
  id!: number;
}
