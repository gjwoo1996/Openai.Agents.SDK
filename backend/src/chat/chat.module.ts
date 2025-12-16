import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatMessage } from 'src/database/entity/chat/chatMessage.entity';
import { ChatRoom } from 'src/database/entity/chat/chatRoom.entity';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ChatMessage, ChatRoom])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
