# System Architecture

## 1. High Level Architecture

```text
Next.js Client
   ↓
WebSocket Streaming
   ↓
NestJS Voice Gateway
   ↓
AI Realtime API
   ↓
Streaming Audio Response
   ↓
Next.js Playback
```

---

# 2. Frontend Architecture

Directory structure:

```
apps/web
 ├ components
 │   └ VoiceRecorder.tsx
 ├ hooks
 │   └ useVoiceStream.ts
 └ app
     └ page.tsx
```

Responsibilities:

VoiceRecorder

* microphone capture
* audio chunk generation

useVoiceStream

* websocket connection
* streaming logic

---

# 3. Backend Architecture

Directory structure:

```
apps/server
 ├ voice
 │   ├ voice.gateway.ts
 │   ├ voice.service.ts
 │   └ ai.service.ts
```

VoiceGateway

* websocket server
* receive audio chunks

VoiceService

* process audio stream

AIService

* call realtime AI API

---

# 4. Audio Streaming

Audio captured from browser:

```
20ms audio frames
```

Example stream:

```
audio frame
audio frame
audio frame
```

---

# 5. Streaming Response

AI response is streamed back:

```
AI audio chunk
AI audio chunk
AI audio chunk
```

Frontend plays audio immediately.

---

# 6. Communication Protocol

Transport:

```
WebSocket
```

Messages:

Client → Server

```
audio_chunk
```

Server → Client

```
audio_response
```

---

# 7. Latency Considerations

Key factors:

* chunk size
* websocket overhead
* AI inference time
* playback buffering

---

# 8. Future Architecture

Potential upgrades:

* WebRTC instead of WebSocket
* Edge AI inference
* local VAD detection
