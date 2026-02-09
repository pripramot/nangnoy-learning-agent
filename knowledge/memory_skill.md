---
name: memory
description: Allows the agent to store and retrieve long-term information.
---

# Memory Skill

This skill allows you to persist information across sessions using a simple JSON file.

## Usage

To use this skill, you must execute the python script located in this directory.

1. **Add Memory**:

    ```bash
    python skills/memory/mem_tool.py add "The content you want to remember"
    ```

2. **Search Memory**:

    ```bash
    python skills/memory/mem_tool.py search "keyword"
    ```

3. **List All Memories**:

    ```bash
    python skills/memory/mem_tool.py list
    ```

## Storage

Memories are stored in `memories.json` within the `skills/memory/` directory.
