import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatRoom } from './chatRoom.entity';

@Entity()
export class ChatMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  isDeleted: boolean;

  @ManyToOne(() => ChatRoom, (chatRoom) => chatRoom.messages, {
    cascade: true,
  })
  chatRoom: ChatRoom;

  @CreateDateColumn()
  createdAt: Date;
}
