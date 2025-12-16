import { ChatRoom } from './chatRoom.entity';
export declare class ChatMessage {
    id: number;
    content: string;
    isDeleted: boolean;
    chatRoom: ChatRoom;
    createdAt: Date;
}
