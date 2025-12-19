import { ChatService } from './chat.service';
import { RequestSseDto } from './dto/request.sse.dto';
import { Observable } from 'rxjs';
export declare class ChatController {
    private chatService;
    constructor(chatService: ChatService);
    getRoomId(): Promise<import("./dto/request.chatRoom.dto").ResponseChatRoomDto>;
    sse(requestSseDto: RequestSseDto): Observable<MessageEvent>;
}
