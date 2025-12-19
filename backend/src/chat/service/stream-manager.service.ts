import { Injectable, Logger } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

interface Stream {
  subject: Subject<MessageEvent>;
  createdAt: Date;
  lastActivity: Date;
}

@Injectable()
export class StreamManagerService {
  private readonly logger = new Logger(StreamManagerService.name);
  private readonly streams: Map<number, Stream> = new Map();

  getStream(chatRoomId: number): Observable<MessageEvent> {
    let streamInfo = this.streams.get(chatRoomId);
    if (!streamInfo) {
      const subject = new Subject<MessageEvent>();
      streamInfo = {
        subject,
        createdAt: new Date(),
        lastActivity: new Date(),
      };
      this.streams.set(chatRoomId, streamInfo);
    }
    return streamInfo.subject.asObservable();
  }
}
