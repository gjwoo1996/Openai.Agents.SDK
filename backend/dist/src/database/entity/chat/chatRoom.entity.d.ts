import { ChatMessage } from './chatMessage.entity';
export declare class ChatRoom {
    id: number;
    title: string;
    isDeleted: boolean;
    createdAt: Date;
    messages: ChatMessage[];
}
