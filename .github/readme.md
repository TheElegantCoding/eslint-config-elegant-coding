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

- [📝 About](#about)
- [🛰️ Features](#features)
- [⚡️ Requirements](#requirements)
- [📦 Installation](#installation)
- [🚀 Usage](#usage)
- [⚙️ Configuration](#configuration)

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="features">🛰️ Features</h2>

- <img src="./asset/eslint.svg" width="20px"/> `Eslint` - Eslint linter
- <img src="./asset/astro.svg" width="20px"/> `Astro` - Catch errors and write awesome Astro components!
- <img src="./asset/github.svg" width="20px"/> `Github` - Github rules for javascript errors
- <img src="./asset/html.svg" width="20px"/> `Html` - Keep your HTML files tidy and consistent.
- <img src="./asset/import.svg" width="20px"/> `Import` - Make your imports easy to find and manage.
- <img src="./asset/javascript.svg" width="20px"/> `Javascript` - Write clean and maintainable JavaScript code.
- <img src="./asset/json.svg" width="20px"/> `Json` - Ensure your JSON data is well-structured.
- <img src="./asset/a11y.svg" width="20px"/> `Jsx a11y` -  Write code that's accessible to everyone.
- <img src="./asset/node.svg" width="20px"/> `Node` - Follow recommended practices for Node.js environments.
- <img src="./asset/perfectionist.svg" width="20px"/> `Perfectionist` -  Go beyond the basics with stricter code quality checks.
- <img src="./asset/promise.svg" width="20px"/> `Promise` - Write clear and easy-to-understand promises.
- <img src="./asset/qwik.svg" width="20px"/> `Qwik` - Build high-quality Qwik components.
- <img src="./asset/regex.svg" width="20px"/> `Regex` - Craft powerful and maintainable regular expressions.
- <img src="./asset/security.svg" width="20px"/> `Security` - Identify potential security vulnerabilities.
- <img src="./asset/solid.svg" width="20px"/> `Solid` -  Write robust Solid components with confidence.
- <img src="./asset/sonar.svg" width="20px"/> `Sonar` - Sonar eslint rules for javascript
- <img src="./asset/stylistic.svg" width="20px"/> `Stylistic` - Improve readability and maintainability with stylistic rules.
- <img src="./asset/typescript.svg" width="20px"/> `Typescript` -  Enforce type safety and keep your code clear.
- <img src="./asset/unicorn.svg" width="20px"/> `Unicorn` - Leverage advanced rules for an extra quality boost.
- <img src="./asset/yml.svg" width="20px"/> `Yaml` - Keep your YAML files clean and consistent.

---

<h2 id="requirements">⚡️ Requirements</h2>

- node >= **18.16.0**
- eslint >= **8.40**

<p align="right">(<a href="#eslint-config-elegant-coding">back to top</a>)</p>

---

<h2 id="installation">📦 Installation</h2>

Run this command to install eslint and the plugin.

<h3><img src="./asset/pnpm.svg" width="20px"/> Pnpm</h3>

```bash
pnpm i -D eslint eslint-config-elegant-coding
```

<h3><img src="./asset/bun.svg" width="20px"/> Bun</h3>

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