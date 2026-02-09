---
name: favicon
description: Create adaptive favicons for web projects following modern best practices. Supports SVG with dark/light mode, ICO fallback, Apple Touch icons, and web manifest icons.
---

# Favicon Skill

Create professional, adaptive favicons that work across all browsers and platforms.

## Required Favicon Sizes

For complete browser and platform support, generate the following:

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16x16, 32x32, 48x48 (multi-size) | Legacy browser fallback |
| `favicon.svg` | Scalable | Modern browsers, supports dark/light theme |
| `favicon-16x16.png` | 16x16 | Browser tabs |
| `favicon-32x32.png` | 32x32 | Browser tabs (high DPI) |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `android-chrome-192x192.png` | 192x192 | Android Chrome |
| `android-chrome-512x512.png` | 512x512 | Android splash screen |

## HTML Markup

Add to `<head>` section:

```html
<!-- Favicon -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#1a1a2e">
```

## Adaptive SVG Favicon (Dark/Light Mode)

Create `favicon.svg` with embedded CSS for theme support:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <style>
    .icon-fill { fill: #1a1a2e; }
    .icon-stroke { stroke: #00d4ff; stroke-width: 8px; }
    
    @media (prefers-color-scheme: dark) {
      .icon-fill { fill: #00d4ff; }
      .icon-stroke { stroke: #1a1a2e; }
    }
  </style>
  <!-- Your icon paths here -->
</svg>
```

## Web Manifest (site.webmanifest)

```json
{
  "name": "Your App Name",
  "short_name": "AppName",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#1a1a2e",
  "background_color": "#1a1a2e",
  "display": "standalone"
}
```

## Generation Script

Use `scripts/generate_favicon.py` to generate all favicon sizes from a source PNG:

```bash
python scripts/generate_favicon.py --source logo.png --output ./public/
```

## Best Practices

1. **SVG First**: Modern browsers support SVG favicons with better quality
2. **Dark Mode Support**: Use `@media (prefers-color-scheme: dark)` in SVG
3. **ICO Fallback**: Always include .ico for older browsers
4. **Apple Touch Icon**: Required for iOS home screen bookmarks
5. **Web Manifest**: Required for PWA and Android Chrome
6. **Transparent Background**: Use transparent PNG for flexibility
7. **Simple Design**: Favicons are small - use simple, recognizable shapes
8. **Test**: Verify in browser DevTools Network panel

## Verification

1. Open DevTools > Network > Filter by Images
2. Search for "favicon" to confirm correct file is loaded
3. Test in both light and dark system themes
4. Test on mobile devices for touch icons

## References

- [web.dev: Building an adaptive favicon](https://web.dev/articles/building/an-adaptive-favicon)
- [MDN: Favicon](https://developer.mozilla.org/docs/Glossary/Favicon)
- [Can I Use: SVG favicons](https://caniuse.com/link-icon-svg)
