---
name: gitbook-integration
description: Build GitBook integrations including custom unfurl actions, content blocks, and interactive components using ContentKit and @gitbook/runtime. Use when creating integrations that display and handle embedded links or interactive pages in GitBook.
---

# GitBook Integration Skill

Build and customize GitBook with interactive integrations and custom link unfurling.

## Advanced References

- **Runtime SDK Guide**: See [gitbook-runtime.md](references/gitbook-runtime.md)
- **ContentKit Block Reference**: See [contentkit-blocks.md](references/contentkit-blocks.md)

## Quick Start

```bash
# Initialize a new GitBook integration project
npx @gitbook/cli integrations init my-integration
```

## Core Concepts

### Integration Structure

GitBook integrations use the `@gitbook/runtime` SDK and are defined by an entry point that exports a `createIntegration` call.

```typescript
import { createIntegration, createComponent } from '@gitbook/runtime';

export default createIntegration({
    components: [MyComponent],
    events: {
        // Handle global events
    },
});
```

### Custom Unfurl Action

Unfurling allows your integration to display rich content when a user pastes a specific URL.

#### 1. Define the Component

The component handles the `@link.unfurl` action to capture the URL and set up properties.

```typescript
const MyUnfurlBlock = createComponent<{ url?: string }>({
    componentId: 'my-unfurl-block',
    async action(element, action) {
        switch (action.action) {
            case '@link.unfurl':
                const { url } = action;
                return { props: { url } };
        }
        return element;
    },
    async render(element, context) {
        const { url } = element.props;
        return (
            <block>
                <webframe source={{ url: url }} />
            </block>
        );
    }
});
```

#### 2. Configure URL Patterns

In your `manifest.yaml` or integration config, specify which URL patterns should trigger your unfurl block.

```yaml
blocks:
  - id: my-unfurl-block
    title: Custom Unfurl
    urlUnfurl:
      - https://example.com/item/*
```

## Interactive Components (ContentKit)

ContentKit provides a set of UI components (blocks) to build interactive experiences:

- `<block>`: Container for UI elements.
- `<text>`: Display formatted text.
- `<button>`: Trigger actions.
- `<webframe>`: Embed external web content.
- `<image>`: Display images.

### Example: Interactive Menu

```typescript
async render(element, context) {
    return (
        <block>
            <text value="Choose an option:" />
            <button label="Refresh" onClick={{ action: 'refresh' }} />
        </block>
    );
}
```

## Testing & Deployment

```bash
# Local development and testing
gitbook-cli integrations dev

# Publish to GitBook
gitbook-cli integrations publish
```
