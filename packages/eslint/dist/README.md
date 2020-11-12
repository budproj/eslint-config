<p align="center">
  <br>
   <img src="https://media.giphy.com/media/Cz1it5S65QGuA/giphy.gif" alt="Dwight (from The Office), explaining that if an idiot would do something, he would not" title="Eslint Config header's GIF" />
  <br>
</p>
<p align="center">
Eslint preset for Bud Javascript projects
</p>

## 📖 About this

This package contains all the base, common Javascriot Eslint configs for all Javascript projects (both front-end and back-end scopes). You should put here only global configurations that we should share accross multiple projects.

* [Table of contents](#)
  * [Quickstart](#-quickstart)
  * [Usage](#-usage)
  * [Contributing](#-contributing)
  * [License](#-license)

## 🧙‍♂️ Quickstart

You can use the most basic Eslint config by using the following rule:

```json
{
  "extends": "@bud/eslint-config/preset-base"
}
```

**IMPORTANT:** You can change the desired preset. To check our available presets check the [Usage](#-usage) section.

## 👩‍🔬 Usage

You can use our configs by picking one of the given available presets:

* [`@bud/eslint-config/preset-base`](preset-base.js)
* [`@bud/eslint-config/preset-typescript`](preset-typescript.js)
* [`@bud/eslint-config/preset-react`](preset-react.js)
* [`@bud/eslint-config/preset-intl`](preset-intl.js)
* [`@bud/eslint-config/preset-prettier`](preset-prettier.js)
* [`@bud/eslint-config/preset-prettier-ts`](preset-prettier-ts.js)
* [`@bud/eslint-config/preset-backend`](preset-backend.js)

## 💻 Contributing

Contributions are what make our company such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. You can learn how to contribute to this project on the [`CONTRIBUTING`](https://github.com/budproj/eslint-configs/blob/main/CONTRIBUTING.md) file of our `eslint-configs` repository.

## 🔓 License

Distributed under the Apache 2.0 License. See [`LICENSE`](LICENSE) for more information.
