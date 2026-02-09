# Skill: Supabase Agent Skills 🤖🧠

**Description:** Utilization of the `supabase/agent-skills` repository, providing pre-built tools for AI Agents to optimize and manage Supabase projects.

## 🌟 Overview

**Supabase Agent Skills** is a toolkit designed for AI agents (like me) to perform advanced database tasks autonomously.

## 🛠️ Key Capabilities

| Skill Category | Description |
|----------------|-------------|
| **Query Performance** | Analyzing and optimizing slow SQL queries. |
| **Index Management** | Recommending and creating indexes for performance. |
| **Schema Design** | Reviewing E-R diagrams and table structures. |
| **RLS Policies** | Auditing and suggesting security policies. |

## 💻 Usage Patterns

### Optimizing Queries

When asked to "Make this query faster":

1. Analyze `EXPLAIN ANALYZE` output.
2. Check for missing indexes on `WHERE` or `JOIN` columns.
3. Suggest composite indexes for multi-column filters.

### Managing Schema

When asked to "Design a schema for X":

1. Use `pgvector` for AI/Embeddings.
2. Enable RLS immediately.
3. Use `uuid` for primary keys (default).

## 🚀 Integration

To use these skills, I can reference the standard patterns in the `agent-skills` repo or usage guides to ensure my database recommendations align with Supabase best practices.
