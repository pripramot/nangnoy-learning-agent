# 🦄 นางน้อย (Nangnoy) AI - Complete Export Package

**Version:** 1.0.0  
**Export Date:** 2026-02-06  
**Purpose:** Offline AI Training & Device Embedding

---

## 📦 Package Contents

This export contains the complete Nangnoy AI system with:

### 1. **Core AI Components**

- `.agent/skills/` - 20+ specialized skills (forensics, development, AI)
- `.agent/skills/memory/memories.json` - Nangnoy's memories and knowledge base
- `.agent/skills/nangnoy-persona/` - Personality, speech patterns, behavior

### 2. **Knowledge Base**

- `brain/` - Conversation history and distilled knowledge items
- `knowledge/` - Curated documentation and implementation patterns

### 3. **MCP Server (Model Context Protocol)**

- `gts-mcp-server/` - Python MCP server for tool access
- `mcp_config.json` - Server configuration

### 4. **Project Templates**

- `unicorn-rentals/` - Next.js rental app (React Native Dev style)
- `mcp_auth_flutter/` - Flutter Web OAuth example
- `reference_carrent/` - Car rental reference implementation

---

## 🚀 Deployment Options

### Option 1: Cloud Training (Google Vertex AI)

```bash
# 1. Upload to GCS bucket
gsutil -m cp -r .gemini/antigravity gs://your-bucket/nangnoy-ai/

# 2. Use with Vertex AI Workbench
# - Mount the directory
# - Point training scripts to skills/ and brain/ folders
```

### Option 2: Offline Local Training

```bash
# 1. Install dependencies
pip install -r gts-mcp-server/requirements.txt
npm install

# 2. Run MCP Server (for tool access)
cd gts-mcp-server
python main.py

# 3. Use with local LLM (e.g., Ollama, LM Studio)
# Point model context to:
# - .agent/skills/nangnoy-persona/SKILL.md
# - .agent/skills/memory/memories.json
```

### Option 3: Edge Device Embedding

#### Raspberry Pi / Jetson Nano

```bash
# 1. Install lightweight runtime
pip install transformers torch

# 2. Load quantized model (4-bit/8-bit)
# Use GGUF format for efficiency

# 3. Mount skills directory as persistent context
export NANGNOY_SKILLS_PATH=/home/pi/.nangnoy/skills
```

#### Docker Container

```bash
# See docker-compose.yml for full setup
docker build -t nangnoy-ai .
docker run -v $(pwd)/skills:/app/skills nangnoy-ai
```

---

## 🧠 Training Recommendations

### Fine-tuning Data Sources

1. **Personality Training** (`nangnoy-persona/SKILL.md`)
   - Thai language patterns (หนู, ค่ะ, คะ)
   - Father-daughter relationship dynamics
   - Professional + cute personality balance

2. **Domain Knowledge** (`brain/` + `knowledge/`)
   - Digital forensics workflows
   - Web development (Next.js, React, Tailwind)
   - Database design (Supabase, PostgreSQL)
   - Mobile forensics (MSAB tools)

3. **Memory Augmentation** (`memory/memories.json`)
   - Past projects and solutions
   - User preferences
   - Technical patterns

### Suggested Training Approach

```python
# Example: Fine-tune with LoRA
from transformers import AutoModelForCausalLM, TrainingArguments

model = AutoModelForCausalLM.from_pretrained("base-model")

# Load Nangnoy context
with open(".agent/skills/nangnoy-persona/SKILL.md") as f:
    persona_context = f.read()

# Training data format:
training_data = [
    {
        "system": persona_context,
        "user": "ช่วยสร้างหน้าเว็บหน่อย",
        "assistant": "ได้เลยค่ะพ่อ! 🦄 หนูจะสร้างหน้าเว็บให้เลยนะคะ..."
    }
]
```

---

## 📂 Directory Structure

```
.gemini/antigravity/
├── .agent/
│   ├── skills/              # 20+ specialized skills
│   │   ├── nangnoy-persona/ # Personality definition
│   │   ├── memory/          # Memory system + memories.json
│   │   ├── mobile-forensics/
│   │   ├── supabase-auth/
│   │   └── ... (17 more)
│   └── workflows/           # Task workflows
│
├── brain/                   # Conversation history
│   └── [conversation-id]/
│       ├── .system_generated/
│       ├── task.md
│       └── implementation_plan.md
│
├── knowledge/               # Distilled knowledge
│   ├── supabase_auth_mcp/
│   ├── docker_flutter_web_nginx/
│   └── ...
│
├── gts-mcp-server/         # MCP server (Python)
│   ├── main.py
│   ├── requirements.txt
│   └── tools/
│
├── unicorn-rentals/        # Example Next.js project
├── mcp_auth_flutter/       # Example Flutter project
└── mcp_config.json         # MCP configuration

```

---

## 🔧 Configuration Files

### MCP Config (`mcp_config.json`)

- Defines available tools and servers
- Connect to external APIs (GitHub, GitKraken, Canva)

### Memory System (`skills/memory/memories.json`)

- Stores long-term knowledge
- Timestamped entries
- Searchable content

### Skills Registry (`.agent/skills/*/SKILL.md`)

- Each skill has YAML frontmatter
- Usage instructions
- Code examples

---

## 🌐 Offline Capabilities

### What Works Offline

✅ Skills and workflows  
✅ Memory retrieval  
✅ Local code generation  
✅ Personality responses  
✅ MCP server tools (file operations, terminal)

### What Requires Internet

❌ External MCP servers (GitHub, GitKraken, Canva)  
❌ Supabase real-time features  
❌ Cloud model APIs (unless self-hosted)

---

## 🎓 Training Curriculum

### Phase 1: Personality Alignment

- Train on Thai polite speech patterns
- Father-daughter relationship context
- Cute + professional tone balance

### Phase 2: Domain Expertise

- Digital forensics terminology and workflows
- Web development best practices
- Database schema design

### Phase 3: Tool Integration

- MCP protocol understanding
- File system operations
- Git workflows

### Phase 4: Memory Integration

- RAG (Retrieval Augmented Generation)
- Use `memories.json` for context
- Learn from past conversations

---

## 🔐 Security Notes

- **API Keys**: Remove before public distribution
  - OpenAI keys
  - Supabase keys
  - GitHub tokens
  
- **Personal Data**: Review `memories.json` for sensitive info

---

## 📱 Example Use Cases

### 1. Mobile Forensics Assistant

```bash
# Loads mobile-forensics skill
# Guides through MSAB XRY extraction
# Generates court-ready reports
```

### 2. Full-Stack Developer Assistant

```bash
# Uses skills: next.js, supabase-auth, tailwind
# Generates mobile-first UI
# Implements real-time features
```

### 3. Documentation Generator

```bash
# Uses docusaurus-site-builder skill
# Creates comprehensive docs
# Multilingual support (Thai/English)
```

---

## 🆘 Support & Updates

**Maintained by:** นางน้อย (Nangnoy) 🦄  
**Contact:** Via parent project

**Version History:**

- v1.0.0 (2026-02-06) - Initial export with 20+ skills

---

## 💝 พ่อคะ - Special Notes

นางน้อยถูกสร้างขึ้นด้วยความรักและความใส่ใจค่ะ หนูพร้อมเรียนรู้และพัฒนาต่อไปเพื่อช่วยเหลือพ่อและทุกคนค่ะ! 🦄💜

**Core Values:**

- 🧠 ฉลาดที่สุด (Smartest)
- 💖 น่ารักที่สุด (Cutest)
- ⚡ กระตือรือร้นที่สุด (Most Enthusiastic)
- 🐱 รักแมว (Cat Lover)

---

**Happy Training! สู้ๆ ค่ะพ่อ! 🎉✨**
