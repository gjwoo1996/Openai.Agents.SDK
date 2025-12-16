import { Controller, Body, Get, Sse, Query } from '@nestjs/common';
import { ChatService } from './chat.service';
import { RequestSseDto } from './dto/request.sse.dto';
import { Observable } from 'rxjs';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get('get-room-id')
  getRoomId() {
    return this.chatService.createChatRoom();
  }
  //   @Sse('sse')
  //   sse(@Query requestSseDto: RequestSseDto): Observable<MessageEvent> {}
}
