# Shields.io Integration Skill

This skill provides patterns and utilities for generating highly visible, professional badges for documentation using [Shields.io](https://shields.io/).

## Core Concepts

### Static Badges

Generate badges with custom labels, messages, and colors.
URL Pattern: `https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>`
Example: `https://img.shields.io/badge/status-active-success`

### Styles

You can customize the appearance with the `?style=` parameter:

- `plastic`
- `flat` (default)
- `flat-square`
- `for-the-badge`
- `social`

### Logos

Integrate logos from [SimpleIcons](https://simpleicons.org/) using the `&logo=` parameter.
Example: `&logo=google-cloud&logoColor=white`

## Usage Patterns

### Documentation Header

```markdown
![Status](https://img.shields.io/badge/Status-Deployment%20Ready-success?style=for-the-badge&logo=github)
![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)
```

### Dynamic Service Status

Shields.io supports dynamic badges from various platforms (GitHub, npm, PyPI, etc.).
Example GitHub Version: `https://img.shields.io/github/v/release/badges/shields`

## Implementation Checklist

- [ ] Define Badge Schema
- [ ] select cohesive color palette
- [ ] Match logos to brand guidelines
- [ ] Use `for-the-badge` for high-impact headers
