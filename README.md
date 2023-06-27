<h1 id="eslint-aesthetic-config">🔧 ESlint aesthetic configuration</h1>

<div align="center">
  <img
    alt="eslint"
    src="https://raw.githubusercontent.com/AesthetiCoder/eslint-config-aesthetic-coder/master/.github/asset/icon/eslint.svg"
  />
</div>

---

<h2 id="about">📝 About</h2>

<table border>
<tr>
<td>

You can customize this configuration to fit your specific needs by disabling or enabling rules, or by changing the severity of the rules. You can also add additional rules that are not included in the style guides.

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>
</td>
</tr>
</table>

---

## 📚 Table of content

- [📝 About](#about)
- [⚡️ Requirements](#requirements)
- [📦 Installation](#installation)
- [🚀 Usage](#usage)
- [⚡️ Scripts](#scripts)
- [📦 Packages](#packages)
  - [Dependencies](#dependencies)
  - [Development Dependencies](#development-dependencies)
- [🗃️ Contact](#contact)

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="requirements">⚡️ Requirements</h2>

- eslint >= **^7.32.0 || ^8.2.0**
- node >= **18.16.0**
- git >= **2.38**
- pnpm >= **8.2.0**

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="installation">📦 Installation</h2>

Run this command to install eslint and the plugin.

```bash
pnpm i -D eslint eslint-config-aesthetic-coder
```

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="usage">🚀 Usage</h2>

To use this plugin put in your eslint config file this lines of codes.

### js - javascript

```json
{
  "root": true,
  "extends": "aesthetic-coder"
}
```

### ts - typescript

```json
{
  "root": true,
  "extends": ["aesthetic-coder", "aesthetic-coder/typescript"]
}
```

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="scripts">⚡️ Scripts</h2>

The following scripts are available in the `package.json`:

- `preinstall`: This script is for only allow pnpm as package manager
- `postinstall`: This script is for setting up the git hooks and validate the error after commit to github
- `build`: This script is for build the package
- `type-check`: This script is for type checking the typescript files
- `lint`: This script is for format and lint all the files
- `release`: This script is for generate a new release in github

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="packages">📦 Packages</h2>

<h3 id="dependencies">Dependencies</h3>

- [**typescript**](https://www.typescriptlang.org) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [**eslint**](https://eslint.org) - ESLint is an open source project that helps you find and fix problems with your JavaScript code.
- [**rimraf**](https://github.com/isaacs/rimraf) - A `rm -rf` util for nodejs

<h3 id="development-dependencies">Development dependencies</h3>

- [**eslint-plugin-import**](https://github.com/import-js/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
- [**@typescript-eslint/eslint-plugin**](https://typescript-eslint.io) - An ESLint plugin which provides lint rules for TypeScript codebases.
- [**@typescript-eslint/parser**](https://typescript-eslint.io) - An ESLint parser which leverages TypeScript ESTree to allow for ESLint to lint TypeScript source code.
- [**eslint-plugin-etc**](https://github.com/cartant/eslint-plugin-etc/tree/main) - More general-purpose (TypeScript-related) ESLint rules
- [**eslint-plugin-perfectionist**](https://github.com/azat-io/eslint-plugin-perfectionist) - 🦄 ESLint plugin for sorting various data such as objects, imports, types, enums, JSX props, etc.
- [**eslint-plugin-promise**](https://github.com/eslint-community/eslint-plugin-promise) - Enforce best practices for JavaScript promises
- [**eslint-plugin-security**](https://github.com/eslint-community/eslint-plugin-security) - ESLint rules for Node Security
- [**eslint-plugin-sonarjs**](https://github.com/SonarSource/eslint-plugin-sonarjs) - SonarJS rules for ESLint to detect bugs and suspicious patterns in your code.
- [**eslint-plugin-sonarjs**](https://github.com/sindresorhus/eslint-plugin-unicorn) - More than 100 powerful ESLint rules

<p align="right">(<a href="#eslint-aesthetic-config">back to top</a>)</p>

---

<h2 id="contact">🗃️ Contact</h2>

<div align="center">
  <h2>This package is made by me <a href="https://github.com/AesthetiCoder">AesthetiCoder</a></h2>
</div>
</br ></br >

<img src="https://raw.githubusercontent.com/AesthetiCoder/eslint-config-aesthetic-coder/master/.github/asset/icon/footer.svg" alt="footer" width="100%" />
</br ></br >
<div align="center">

<h3><strong>Thank you for reading ❤️</strong></h3>

</div>

<p align="right">(<a href="#webpage-pablote-beef">back to top</a>)</p>
