import { ChatMessage } from 'src/database/entity/chat/chatMessage.entity';
import { ChatRoom } from 'src/database/entity/chat/chatRoom.entity';
import { Repository } from 'typeorm';
import { ResponseChatRoomDto } from './dto/request.chatRoom.dto';
export declare class ChatService {
    private chatMessageRepository;
    private chatRoomRepository;
    constructor(chatMessageRepository: Repository<ChatMessage>, chatRoomRepository: Repository<ChatRoom>);
    createChatRoom(): Promise<ResponseChatRoomDto>;
}
