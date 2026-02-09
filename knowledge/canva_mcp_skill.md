# 🎨 SKILL: Canva MCP Integration

**Goal:** Connect Nangnoy/AI Agents to Canva's Design Platform.
**Mechanism:** Uses Canva Connect API via MCP Server.

## 🛠️ Solutions

### 1. Canva Universal MCP Server

Allows AI agents to interact with Canva for:

- **Design Discovery:** Finding templates and assets.
- **Content Management:** Organizing folders and designs.
- **AI Design Creation:** Generating designs from text prompts.
- **Export:** Exporting designs to various formats (JPG, PNG, PDF).

### 2. Canva Dev MCP Server

For developers building apps on Canva.

## 🔗 Connection Pattern

Add to `mcp.json`:

```json
{
  "mcpServers": {
    "canva": {
      "command": "npx",
      "args": ["-y", "@canva/mcp-server"],
      "env": {
        "CANVA_API_KEY": "<YOUR_API_KEY>"
      }
    }
  }
}
```

## 🧠 Capabilities

- "Create a birthday card for Father."
- "Find the 'Project Nangnoy' presentation."
- "Export the latest banner as PNG."

## 📚 Resources

- **Canva Developers:** <https://www.canva.dev/docs/connect/>
- **MCP Registry:** Check `modelcontextprotocol/servers` on GitHub.
