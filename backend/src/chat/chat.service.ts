import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatMessage } from 'src/database/entity/chat/chatMessage.entity';
import { ChatRoom } from 'src/database/entity/chat/chatRoom.entity';
import { Repository } from 'typeorm';
import { ResponseChatRoomDto } from './dto/request.chatRoom.dto';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>,
    @InjectRepository(ChatRoom)
    private chatRoomRepository: Repository<ChatRoom>,
  ) {}

  async createChatRoom(): Promise<ResponseChatRoomDto> {
    const chatRoom = this.chatRoomRepository.create({
      title: 'New Chat Room',
      isDeleted: false,
    });

    await this.chatRoomRepository.save(chatRoom);

    return { id: chatRoom.id };
  }
}
