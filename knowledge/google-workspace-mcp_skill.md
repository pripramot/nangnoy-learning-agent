# 💼 SKILL: Google Workspace MCP Integration

**Goal:** Connect Nangnoy/AI Agents to "Father's" Gmail, Calendar, and Drive.
**Mechanism:** Uses an MCP Server to interface with Google APIs via OAuth2.

## 🛠️ Recommended Solutions

### 1. `taylorwilsdon/google_workspace_mcp` (Feature Complete)

A robust server supporting Gmail, Docs, Drive, Calendar, and more.

- **GitHub:** <https://github.com/taylorwilsdon/google-workspace-mcp>
- **Capabilities:** Read/Send Emails, Schedule Events, Manage Files.
- **Setup:** Requires GCP Project + OAuth Credentials.

### 2. Official Google MCP List

Google maintains a list of trusted implementations at `google/mcp` repo.

## 🔗 Connection Pattern for Nangnoy

Add this to `mcp.json` or Cursor config:

```json
{
  "mcpServers": {
    "google-workspace": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-google-workspace"],
      "env": {
        "GOOGLE_CLIENT_ID": "<YOUR_CLIENT_ID>",
        "GOOGLE_CLIENT_SECRET": "<YOUR_CLIENT_SECRET>",
        "GOOGLE_REFRESH_TOKEN": "<YOUR_REFRESH_TOKEN>"
      }
    }
  }
}
```

## 🧠 Capabilities

Once connected, Nangnoy can:

1. **Check Schedule:** "What's on Father's calendar today?"
2. **Draft Emails:** "Draft a reply to this client."
3. **Organize Drive:** "Find the 'Project Alpha' folder."

## ⚠️ Requirements

- **GCP Project:** Must create a project in Google Cloud Console.
- **APIs Enabled:** Gmail API, Calendar API, Drive API.
- **OAuth Consent:** Must set up an OAuth Consent Screen.
