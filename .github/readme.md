<img src="./asset/cover.svg" alt="cover" width="100%" align="center" />
<br />
<h1 id="eslint-config-elegant-coding">⚙️ Eslint elegant coder configuration</h1>
---

<pre align="center">
  <a href="#instalation">📦 SETUP</a> • <a href="#configuration">⚙️ CONFIGURATION</a> • <a href="#features">️️️🛰️ FEATURES</a>
</pre>

---

<h2 id="about">📝 About</h2>

<table border>
<tr>
<td>

This GitHub repository offers a powerful ESLint configuration to elevate your coding experience.  Proactively identify and fix potential errors before they cause issues, preventing runtime failures and streamlining your development workflow.

The configuration enforces consistent coding style and best practices, making your codebase easier to understand, modify, and collaborate on in the long run. It's built to be adaptable, allowing you to fine-tune the rules to your project's specific needs. Leverage a curated set of pre-configured ESLint rules, easily add or remove rules for further customization, and benefit from clear documentation that explains the reasoning behind each rule.

<p align="right">(<a href="#eslint-config-elegant-coding">⬆️ back to top</a>)</p>
</td>
</tr>
</table>

---

## 📚 Table of content

* [📝 About](#about)
- [🛰️ Features](#features)
* [⚡️ Requirements](#requirements)
* [📦 Installation](#installation)
* [🚀 Usage](#usage)
- [⚙️ Configuration](#configuration)

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="features">🛰️ Features</h2>

- <img src="./asset/eslint.svg" width="16px"/> `Eslint` - Eslint linter
- `⚙️ Eslint` - Eslint Linter
- `🦾 Typescript` -  Enforce type safety and code clarity with a robust set of ESLint rules for TypeScript projects.
- `🌌 Astro` - Astro rules to prevent errors and enforce best practices in your Astro components.
- `🕹️ Git` - Github eslint standard rules
- `Html` -
- `Import` -
- `Javascript` -
- `Json` -
- `Jsx a11y` -
- `Node` -
- `Perfectionist` -
- `Promise` -
- `Qwik` -
- `Regex` -
- `Security` -
- `Solid` -
- `Sonar` -
- `Stylistic` -
- `Typescript` -
- `Unicorn` -
- `Yaml` -

---

<h2 id="requirements">⚡️ Requirements</h2>

* node >= **18.16.0**
* eslint >= **8.40**

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="installation">📦 Installation</h2>

Run this command to install eslint and the plugin.

### 📦 Pnpm

```bash
pnpm i -D eslint eslint-config-elegant-coding
```

### 📦 Bun

```bash
bun i -D eslint eslint-config-elegant-coding
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="usage">🚀 Usage</h2>

To use this plugin put in your repositorie you need to create an `eslint.config.js` file and add this lines of code.

```ts
  import elegantCoding from 'eslint-config-elegant-coding';

  export default elegantCoding();
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="configuration">⚙️ Configuration</h2>

Extra settings that can be added.

```ts
  import elegantCoding from 'eslint-config-elegant-coding';

  export default elegantCoding({
    // This line enables ESLint rules for YAML files.
    yml: true,

    // This line enables ESLint rules for Qwik components.
    qwik: true,

    // This line enables ESLint rules for HTML files.
    html: true,

    // This line enables ESLint rules for JSON files.
    json: true,

    // This line enables ESLint rules for Solid components.
    solid: true,

    // This line enables ESLint rules for Astro components.
    astro: true,

    // This line specifies a file to ignore from linting.
    // In this case, 'postcss.config.cjs' will not be processed by ESLint.
    ignore: [ 'postcss.config.cjs' ],

    // This line enables ESLint rules for accessibility in JSX code.
    jsxA11y: true,

    // This line enables ESLint rules for stylistic concerns in your code.
    stylistic: true,

    // This line enables ESLint rules for TypeScript files.
    typescript: true,
  });
```

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

