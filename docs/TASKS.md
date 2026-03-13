# Development Tasks

## Phase 1 — Project Setup

Tasks:

1. create Next.js project
2. create NestJS project
3. configure workspace structure

Expected structure:

```
apps/
 ├ web
 └ server
docs/
```

---

# Phase 2 — Frontend Voice Capture

Tasks:

* implement microphone capture
* implement MediaRecorder
* generate audio chunks

Example:

```
navigator.mediaDevices.getUserMedia
```

---

# Phase 3 — WebSocket Streaming

Tasks:

* create websocket client
* connect to backend
* send audio chunks

Event:

```
audio_chunk
```

---

# Phase 4 — Backend WebSocket Gateway

Tasks:

* create NestJS gateway
* receive audio chunks
* forward to AI service

---

# Phase 5 — AI Integration

Tasks:

* connect to AI realtime API
* stream audio
* stream response

---

# Phase 6 — Audio Playback

Tasks:

* receive audio response
* decode audio
* play via AudioContext

---

# Phase 7 — Error Handling

Tasks:

* microphone permission error
* websocket reconnect
* AI API failure handling

---

# Phase 8 — Optimization

Tasks:

* reduce latency
* improve chunk size
* add buffering strategy

---

# Final Deliverable

The system should support:

1. start voice conversation
2. stream user audio
3. AI processes speech
4. AI responds with streaming voice
5. continuous conversation
