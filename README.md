# AI Agent Chat – React Frontend

This is a simple React-based chat UI for interacting with the Ollama-powered AI agent gateway.

## Features

- WhatsApp-style chat UI
- Dynamic message rendering with different styles
- Handles text input and display of agent responses
- Supports auto-scrolling, keyboard shortcuts, loading state

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

```bash
npm start
```

App runs at:  
 http://localhost:3001

## Backend Connection

This frontend sends user messages to:

```
http://localhost:3000/chat
```

Make sure the `ollama-agent` backend is running before sending messages.

## How to Use

Type your message and press `Enter` or click **Send**.

### Sample Messages to Test

```plaintext
Please pay for subscriber 1001 in April 2025
What is the bill for subscriber 1001 in April 2025
Show me the detailed bill for subscriber 1001 in April 2025
```

### Possible Agent Responses

- "Fatura başarıyla ödendi."
- "Tutar: $60.0, Ödeme durumu: Ödenmedi"
- A detailed breakdown of internet/phone usage

## Notes

- You may receive `Unknown intent` if the model fails to understand the message.
- Detailed usage results return an object – currently rendered as raw JSON.

## Demo Recording

[Watch the demo on Google Drive](https://drive.google.com/file/d/13Lgwy78dEQnIj_9DNvpFfylsF_-jtaZ8/view?usp=sharing)
