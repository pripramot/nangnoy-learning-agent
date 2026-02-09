---
name: vertex-ai-integration
description: Embed Google Cloud Vertex AI GenAI into Application Integrations. Use when building GenAI workflows with text-bison, chat-bison models, creating Vertex AI Predict tasks, or integrating AI into Google Cloud applications.
---

# Vertex AI Integration Skill

Embed GenAI into Google Cloud Application Integrations.

## Advanced References

- **Predict API Patterns**: See [vertex-ai-predict.md](references/vertex-ai-predict.md)

## Overview

Use Vertex AI tasks to add AI capabilities to your integration workflows.

## Supported Models

- `text-bison` - Text generation
- `chat-bison` - Conversational AI
- `gemini-pro` - Advanced reasoning

## Integration Flow

```text
API Trigger → Set Parameters → Vertex AI Predict → Map Response
```

## Sample Configuration

### Prompt Request Template

```json
{
  "instances": [{
    "prompt": "$TextPrompt$"
  }],
  "parameters": {
    "temperature": 0.2,
    "maxOutputTokens": 768,
    "topP": 0.8,
    "topK": 40
  }
}
```

### Required Variables

| Variable | Type | Description |
| :--- | :--- | :--- |
| `TextPrompt` | String | Input prompt |
| `ModelId` | String | Model name (e.g., text-bison@001) |
| `ProjectId` | String | GCP Project ID |
| `Region` | String | GCP Region (e.g., us-central1) |

## Setup Steps

1. **Enable APIs**: Vertex AI API, Application Integration API
2. **Create Service Account**: Grant `Vertex AI User` role
3. **Create Integration**: Add Vertex AI Predict task
4. **Configure Authentication**: Attach service account
5. **Test**: Run integration with sample prompts

## Endpoint Format

```bash
publishers/google/models/{ModelId}
```

## Response Handling

```javascript
// Extract content from predictions
const content = response.predictions[0].content;
```
