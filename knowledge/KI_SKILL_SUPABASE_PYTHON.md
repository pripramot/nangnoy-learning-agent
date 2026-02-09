# Skill: Supabase Python Mastery 🐍🔥

**Description:** Expert guide for using Supabase with Python, ideal for backend scripts, AI agents, and data analysis tools.

## 📦 Installation

```bash
pip install supabase
```

## 🚀 Initialization

```python
import os
from supabase import create_client, Client

url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)
```

## 💾 Database Operations

### Select

```python
response = supabase.table('countries').select("*").execute()
countries = response.data
```

### Insert

```python
data, count = supabase.table('countries').insert({"name": "Thailand", "capital": "Bangkok"}).execute()
```

### Update

```python
data, count = supabase.table('countries').update({"capital": "Krung Thep"}).eq("id", 1).execute()
```

### Delete

```python
data, count = supabase.table('countries').delete().eq("id", 1).execute()
```

## 🕵️‍♂️ Vector Operations (AI/Embeddings)

Usually paired with `vecs` or direct SQL via `pgvector`.

```python
# Calling a stored procedure (RPC) for similarity search
response = supabase.rpc(
    'match_documents', 
    {
        'query_embedding': [0.1, 0.2, ...], 
        'match_threshold': 0.7, 
        'match_count': 5
    }
).execute()
```

## ⚡ Realtime

The Python client has limited Realtime support compared to JS/Flutter, but is perfect for RESTful operations and Admin tasks.
