---
name: mcp-developer
description: Expert skill for building, debugging, and integrating Model Context Protocol (MCP) servers and clients.
---
# Model Context Protocol (MCP) Developer Skill 🔌

This skill empowers the agent to build, debug, and maintain MCP servers, enabling AI models to securely access local data and tools.

## 🧠 Core Concepts

MCP is a standard protocol for connecting AI models to data sources and tools. It consists of:

1. **Host**: The AI application (e.g., Claude Desktop, IDE).
2. **Client**: The connector within the Host.
3. **Server**: The application providing Data (`Resources`), Functions (`Tools`), or Templates (`Prompts`).

### Key Primitives

- **Resources**: File-like data (logs, database rows, API responses) that can be read by clients.
  - URI-based identifying.
  - Supports real-time updates via subscriptions.
- **Tools**: Executable functions that can be called by the LLM (requires user approval).
  - JSON-RPC based.
  - Can return text, images, or other resources.
- **Prompts**: Pre-defined templates to help users start specific workflows.

## 🛠️ Building an MCP Server (Python / FastMCP)

The recommended way to start is using the Python SDK with `FastMCP`.

### 1. Setup

```bash
# Using uv (Recommended)
uv init my-mcp-server
cd my-mcp-server
uv venv
source .venv/bin/activate
uv add "mcp[cli]" httpx
```

### 2. Implementation Template (`server.py`)

```python
from mcp.server.fastmcp import FastMCP
import httpx

# Initialize Server
mcp = FastMCP("my-server")

# Define a Tool
@mcp.tool()
async def get_crypto_price(currency: str) -> str:
    """Get the current price of a cryptocurrency.
    Args:
        currency: The symbol (e.g., BTC, ETH)
    """
    url = f"https://api.coincap.io/v2/assets/{currency.lower()}"
    async with httpx.AsyncClient() as client:
        resp = await client.get(url)
        data = resp.json()
        return f"{currency.upper()}: ${data['data']['priceUsd']}"

# Define a Resource
@mcp.resource("crypto://list")
def list_cryptos() -> str:
    """Return a list of tracked cryptocurrencies."""
    return "BTC, ETH, DOGE"

if __name__ == "__main__":
    mcp.run(transport="stdio")
```

### 3. Running & Inspecting

To test your server, use the **MCP Inspector** (or run directly with a Client):

```bash
# Install Inspector
npx @modelcontextprotocol/inspector uv run server.py
```

*This opens a web UI to test Tools and Resources.*

## 📦 Building with TypeScript (Node.js)

For TypeScript projects, use the Official SDK:

### 1. Setup

```bash
npm init -y
npm install @modelcontextprotocol/sdk zod
npm install -D typescript @types/node
```

### 2. Implementation

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

const server = new Server({
  name: "weather-server",
  version: "1.0.0",
}, {
  capabilities: {
    tools: {},
  },
});

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [{
      name: "get_weather",
      description: "Get weather for a city",
      inputSchema: {
        type: "object",
        properties: {
          city: { type: "string" }
        },
        required: ["city"]
      }
    }]
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "get_weather") {
    return {
      content: [{ type: "text", text: "Sunny, 25°C" }]
    };
  }
  throw new Error("Tool not found");
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

## 🔍 Best Practices

1. **Logging**: NEVER use `print()` or `console.log()` for debugging if using `stdio` transport. It corrupts the JSON-RPC channel.
    - Python: Use `import logging` (logging.info writes to stderr by default).
    - Node: Use `console.error()`.
2. **Security**: Validate all inputs in Tools. Tools are executed in your environment.
3. **Error Handling**: Return graceful error messages to the LLM, don't just crash.

## 📚 References

- Docs: <https://modelcontextprotocol.io/docs>
- SDKs: <https://github.com/modelcontextprotocol>
