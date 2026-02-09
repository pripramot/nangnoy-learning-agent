---
name: structured-data-extractor
description: Advanced professional data pipeline for extracting structured information from Markdown (.md) documents into high-quality JSONL. Implements triple validation (Syntax, Schema, Quality Metrics) and a multi-tool extraction strategy (10 Tools 10 Skills) to identify insights, conceptual breakdowns, and comprehensive document essence. Use when reliable, standardized, and large-scale data processing is required.
---

# Structured Data Extractor Skill

Professional mandate-driven data pipeline for Markdown-to-JSONL extraction.

## Advanced References

- **Quality Standards & Metrics**: See [quality-standards.md](references/quality-standards.md)
- **Multi-Extractor Pipeline**: See [multi-extractor.md](references/multi-extractor.md)

## Formal Mandate V1

This skill operates under a formal mandate to ensure the highest data quality and multi-perspective insights:

> "ให้ระบบดำเนินการตรวจสอบความถูกต้องของข้อมูล JSONL และสนับสนุนขั้นตอนการสร้างสารสกัดจากไฟล์ Markdown ตามเกณฑ์มาตรฐานคุณภาพข้อมูลสมัยใหม่... ระบบต้องมอง JSONL เป็นองค์ประกอบสำคัญของ pipeline ข้อมูล และดำเนินการตรวจสอบทั้งเชิงโครงสร้าง (syntax), เชิงสคีมา (schema), และเชิงสถิติ (quality metrics)..."

## Core Pipeline Architecture

### 1. Pre-processing (Internal Bucketing)

Before final output, data is stored in internal buckets to separate different data traits (Pros/Cons, Concepts, Essence).

### 2. Multi-Extractor Strategy (10 Tools)

The extraction process uses 10 independent virtual "Tools" representing different skills:

1. **The Architect**: Structure and Hierarchy.
2. **The Analyst**: Statistical quality and consistency.
3. **The Strategist**: Pros, Cons, and Strategic implications.
4. **The Teacher**: Concept breaking and educational simplification.
5. **The Summary Expert**: Preservation of core "Essence".
6. **The Interrogator**: Q&A and stress-testing the data.
7. **The Connector**: Relationship mapping between concepts.
8. **The Visualizer**: Extracting data suitable for diagrams.
9. **The Auditor**: Schema compliance and syntax validity.
10. **The Aggregator**: FINAL JSONL generation and consolidation.

### 3. Triple Validation

- **Syntax**: Ensures valid JSON lines.
- **Schema**: Validates against the target data model.
- **Quality**: Checks for completeness, diversity, and statistical significance.

## Quick Start

```bash
# Run the multi-extractor pipeline on a directory of .md files
python scripts/multi_extractor.py --input ./docs --output ./output.jsonl

# Validate a JSONL file
python scripts/validate_jsonl.py --file ./output.jsonl
```

## Input/Output Requirements

- **Input**: Strictly `.md` files.
- **Output**: Standardized JSONL with validated quality metrics.
