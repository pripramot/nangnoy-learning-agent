---
name: line-developers
description: Build LINE platform integrations including Messaging API bots, LINE Login, LIFF web apps, LINE MINI Apps, and LINE Pay. Use when creating chatbots, implementing LINE authentication, or building LINE-integrated services.
---

# LINE Developers Skill

Build integrations for the LINE platform.

## Products

| Product | Purpose |
|---------|---------|
| Messaging API | Build chatbots and send messages |
| LINE Login | Authenticate users with LINE |
| LIFF | Web apps inside LINE |
| LINE MINI App | Native-like apps in LINE |
| LINE Pay | Payment integration |

## Messaging API

### Setup

1. Create channel at [LINE Developers Console](https://developers.line.biz/)
2. Get Channel Access Token and Channel Secret
3. Configure webhook URL

### Send Message (Node.js)

```javascript
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: 'YOUR_CHANNEL_ACCESS_TOKEN'
});

// Reply to user
await client.replyMessage(replyToken, {
  type: 'text',
  text: 'Hello!'
});

// Push message
await client.pushMessage(userId, {
  type: 'text',
  text: 'Notification!'
});
```

### Message Types

- Text, Image, Video, Audio
- Sticker, Location
- Template (buttons, carousel, confirm)
- Flex Message (custom layouts)

## LINE Login

```javascript
// OAuth URL
const loginUrl = `https://access.line.me/oauth2/v2.1/authorize?
  response_type=code&
  client_id=${channelId}&
  redirect_uri=${callbackUrl}&
  state=${state}&
  scope=profile%20openid`;

// Exchange code for token
const tokenResponse = await fetch('https://api.line.me/oauth2/v2.1/token', {
  method: 'POST',
  body: new URLSearchParams({
    grant_type: 'authorization_code',
    code: authCode,
    redirect_uri: callbackUrl,
    client_id: channelId,
    client_secret: channelSecret
  })
});
```

## LIFF (LINE Front-end Framework)

```javascript
import liff from '@line/liff';

// Initialize
await liff.init({ liffId: 'YOUR_LIFF_ID' });

// Get user profile
const profile = await liff.getProfile();
console.log(profile.displayName, profile.pictureUrl);

// Send message to chat
await liff.sendMessages([{
  type: 'text',
  text: 'Sent from LIFF!'
}]);

// Share target picker
await liff.shareTargetPicker([{
  type: 'text',
  text: 'Check this out!'
}]);
```

## Webhook Handler

```javascript
app.post('/webhook', line.middleware(config), (req, res) => {
  Promise.all(req.body.events.map(handleEvent))
    .then(() => res.json({ success: true }));
});

function handleEvent(event) {
  if (event.type === 'message' && event.message.type === 'text') {
    return client.replyMessage(event.replyToken, {
      type: 'text',
      text: `You said: ${event.message.text}`
    });
  }
  return Promise.resolve(null);
}
```
