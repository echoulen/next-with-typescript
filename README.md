# Next.js + Typescript
[![npm version](https://badge.fury.io/js/next-with-typescript.svg)](https://badge.fury.io/js/next-with-typescript)
![license](https://img.shields.io/github/license/echoulen/next-with-typescript.svg)

Use [Typescript 3+](https://www.typescriptlang.org/) with [Next.js 7+](https://github.com/zeit/next.js)

This plugin implements [ts-loader](https://github.com/TypeStrong/ts-loader) with Next.js.

## Installation
```
yarn add ts-loader next-with-typescript
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withTypescript = require('next-with-typescript')
module.exports = withTypescript()
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withTypescript = require('@zeit/next-typescript')
module.exports = withTypescript({
  webpack(config, options) {
    return config
  }
})
```
