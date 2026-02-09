# 📓 SKILL: NotebookLM MCP Integration

**Goal:** Connect AI Agents (Nangnoy/Claude/Cursor) to Google NotebookLM's grounded knowledge.
**Mechanism:** Uses a "Bridge" MCP Server to automate browser interactions or API calls.

## 🛠️ Leading Solutions (Community)

Since Google has no public API for NotebookLM (Standard/Pro), we use community MCP servers:

### 1. `jacob-bd/notebooklm-mcp-cli` (Recommended)

Unifies CLI and MCP Server.

- **GitHub:** <https://github.com/jacob-bd/notebooklm-mcp-cli>
- **Install:** `npm install -g notebooklm-mcp-cli`
- **Auth:** `notebooklm-mcp login` (Opens browser)
- **Use:** Connect via stdio in `mcp.json`.

### 2. `khengyun/notebooklm-mcp`

Focuses on browser automation (Selenium/Puppeteer).

- **GitHub:** <https://github.com/khengyun/notebooklm-mcp>
- **Pros:** Robust auth handling.
- **Cons:** Slower due to browser overhead.

## 🔗 Connection Pattern for Nangnoy

Add this to `mcp.json` or Cursor config:

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "npx",
      "args": ["-y", "notebooklm-mcp-cli", "start"],
      "env": {
        "NOTEBOOKLM_COOKIE": "<Auth_Cookie_If_Needed>"
      }
    }
  }
}
```

## 🧠 Capabilities

Once connected, Nangnoy can:

1. **Read Notebooks:** Fetch summaries and specific citations.
2. **Add Sources:** Upload new docs to a notebook automatically.
3. **Generate Audio:** Trigger "Audio Overview" generation.

## ⚠️ Warning

- **Auth Fragility:** Google sessions expire. Re-auth is needed periodically.
- **Unofficial:** This relies on internal APIs/DOM structure. May break if Google changes UI.
