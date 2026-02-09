---
name: mobile-forensics
description: Guide for mobile digital forensics using MSAB tools (XRY, XAMN, XEC). Use when extracting data from mobile devices, analyzing digital evidence, managing forensic workflows, or generating court-ready reports.
---

# Mobile Forensics Skill (MSAB)

Digital forensics workflow for mobile device data extraction and analysis.

## Advanced References

- **Extraction Patterns**: See [xry-extraction.md](references/xry-extraction.md)
- **Analysis Techniques**: See [xamn-analysis.md](references/xamn-analysis.md)
- **Chain of Custody**: See [evidence-handling.md](references/evidence-handling.md)

> **Note**: XRY, XAMN, and XEC are commercial tools requiring valid licenses from MSAB.

## Workflow Overview

```text
Extract (XRY) → Analyze (XAMN) → Manage (XEC)
```

## XRY - Data Extraction

### Extraction Methods

1. **Logical extraction** - App data, contacts, messages, call logs
2. **Physical extraction** - Full file system, deleted data recovery
3. **Cloud extraction** - iCloud, Google accounts, social media
4. **Chip-off extraction** - Direct memory chip reading

### Supported Data Types

- SMS/MMS, call history, contacts
- Photos, videos, audio files
- App data (WhatsApp, Telegram, Signal, etc.)
- Location data, WiFi history
- Browser history, bookmarks
- Deleted content recovery

## XAMN - Analysis & Visualization

### Key Features

- Timeline analysis
- Communication mapping
- Keyword search across all data
- Geolocation mapping
- Link analysis between contacts
- Media gallery viewer

### Analysis Workflow

1. Import XRY extraction
2. Apply filters and searches
3. Create timeline of events
4. Map communications between parties
5. Tag and bookmark evidence
6. Generate reports

## XEC - Workflow Management

### Capabilities

- Team performance monitoring
- License management
- Remote deployment of updates
- Case management
- Audit trail logging

## Evidence Handling Best Practices

### Chain of Custody

1. Document device receipt (date, time, condition)
2. Photograph device before processing
3. Use write-blockers when applicable
4. Hash all extracted data (MD5, SHA-256)
5. Document all actions taken
6. Secure storage with access controls

### Court-Ready Reports

- Include extraction method used
- Document hash values for integrity
- Include analyst credentials
- Provide detailed methodology
- Export in standard formats (PDF, Excel)
