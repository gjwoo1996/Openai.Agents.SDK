import { Observable } from 'rxjs';
export declare class StreamManagerService {
    private readonly logger;
    private readonly streams;
    getStream(chatRoomId: number): Observable<MessageEvent>;
}
