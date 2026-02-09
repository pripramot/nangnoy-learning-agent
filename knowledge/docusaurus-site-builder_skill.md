---
name: docusaurus-site-builder
description: Build high-quality documentation websites like React Native, Facebook, and Google using Docusaurus. Capabilities include documentation versioning, i18n, blog support, and search.
---

# Docusaurus Site Builder Skill

Create world-class documentation websites that look and feel like `reactnative.dev`.

## 🚀 Key Features of React Native's Site (Docusaurus)

- **Documentation Engine**: Markdown-based docs with versioning
- **React Components**: Use React components inside Markdown (MDX)
- **Internationalization (i18n)**: Native support for multiple languages
- **Dark Mode**: Built-in support
- **Fast**: Static-site generation with React hydration

## 🛠️ Installation & Setup

To create a new site (like `unicorn-presentations`):

```bash
npx create-docusaurus@latest my-website classic
```

## 📂 Project Structure

```
my-website/
├── docs/               # Documentation files (Markdown)
├── src/
│   ├── components/     # Custom React components (HomepageFeatures, etc.)
│   ├── css/           # Custom CSS (custom.css)
│   └── pages/         # Landing pages (index.js, index.module.css)
├── static/             # Static assets (img, favicon)
├── docusaurus.config.js # Main configuration
└── sidebars.js         # Sidebar navigation setup
```

## 🎨 Recreating React Native's Look

### 1. Hero Section (`src/pages/index.js`)

mimic the `reactnative.dev` hero:

```jsx
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Unicorn AI Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
```

### 2. Feature Blocks (`src/components/HomepageFeatures`)

Use the 3-column layout:

```jsx
const FeatureList = [
  {
    title: 'เรียนรู้ครั้งเดียว ใช้ได้ทุกที่', // Learn once, write anywhere
    Svg: require('@site/static/img/unicorn_logo.svg').default,
    description: (
      <>
        GTSAlpha-Forensics ช่วยให้คุณวิเคราะห์ข้อมูลดิจิทัลได้จากทุกแพลตฟอร์ม
        ด้วยขุมพลัง AI นางน้อย
      </>
    ),
  },
  // ... more features
];
```

## 🔧 Configuring `docusaurus.config.js`

Crucial settings for React Native style:

```javascript
const config = {
  title: 'Unicorn',
  tagline: 'ระบบนิติวิทยาศาสตร์ดิจิทัลอัจฉริยะ',
  favicon: 'img/favicon.ico',
  url: 'https://pripramot.github.io',
  baseUrl: '/unicorn-presentations/', // For GitHub Pages
  organizationName: 'pripramot', 
  projectName: 'unicorn-presentations',
  themeConfig: {
    navbar: {
      title: 'Unicorn',
      logo: {
        alt: 'Unicorn Logo',
        src: 'img/logo.svg',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'คู่มือ (Docs)'},
        {to: '/blog', label: 'บล็อก', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
       // ... footer links
    },
  },
};
```

## 📦 Deployment to GitHub Pages

1. Build code:

   ```bash
   npm run build
   ```

2. The `build` folder contains the static site.
3. Push `build` folder content to `gh-pages` branch OR use GitHub Actions.

## 🔗 References

- [Docusaurus Documentation](https://docusaurus.io/)
- [React Native Website Repo](https://github.com/facebook/react-native-website)
