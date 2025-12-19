"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StreamManagerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamManagerService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let StreamManagerService = StreamManagerService_1 = class StreamManagerService {
    logger = new common_1.Logger(StreamManagerService_1.name);
    streams = new Map();
    getStream(chatRoomId) {
        let streamInfo = this.streams.get(chatRoomId);
        if (!streamInfo) {
            const subject = new rxjs_1.Subject();
            streamInfo = {
                subject,
                createdAt: new Date(),
                lastActivity: new Date(),
            };
            this.streams.set(chatRoomId, streamInfo);
        }
        return streamInfo.subject.asObservable();
    }
};
exports.StreamManagerService = StreamManagerService;
exports.StreamManagerService = StreamManagerService = StreamManagerService_1 = __decorate([
    (0, common_1.Injectable)()
], StreamManagerService);
//# sourceMappingURL=stream-manager.service.js.map