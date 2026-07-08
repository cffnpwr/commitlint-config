# @cffnpwr/commitlint-config

[![GitHub License](https://img.shields.io/github/license/cffnpwr/commitlint-config?style=flat)](./LICENSE)
[![npm Version](https://img.shields.io/npm/v/%40cffnpwr%2Fcommitlint-config?style=flat)](https://www.npmjs.com/package/@cffnpwr/commitlint-config)
[![JSR Version](https://jsr.io/badges/@cffnpwr/commitlint-config)](https://jsr.io/@cffnpwr/commitlint-config)

cffnpwrのためのcommitlint共通設定です。

[README.md for English is available here](./README.md).

## 含まれるもの

- Conventional Commitsのルール（`type-enum`・`subject-max-length` など）。
- `no-ai-coauthor`: `Co-authored-by` トレーラがAIエージェントを参照するコミットを拒否します。
- `gitmoji-whitelist`: subject先頭のgitmojiショートコードを、ホワイトリストにある場合のみ許可します。

## How to Install

### npm

```sh
npm install -D @cffnpwr/commitlint-config
```

or

```sh
npx jsr add -D @cffnpwr/commitlint-config
```

### yarn

```sh
yarn add -D @cffnpwr/commitlint-config
```

or

```sh
yarn dlx jsr add -D @cffnpwr/commitlint-config
```

### pnpm

```sh
pnpm add -D @cffnpwr/commitlint-config
```

or

```sh
pnpm dlx jsr add -D @cffnpwr/commitlint-config
```

### Bun

```sh
bun add -D @cffnpwr/commitlint-config
```

or

```sh
bunx jsr add -D @cffnpwr/commitlint-config
```

### Deno

```sh
deno add -D npm:@cffnpwr/commitlint-config
```

or

```sh
deno add -D jsr:@cffnpwr/commitlint-config
```

## How to use

commitlintの設定ファイルを作成し、この共通設定を `extends` します。

```typescript
import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@cffnpwr/commitlint-config"],
};

export default config;
```

カスタムルール `no-ai-coauthor` と `gitmoji-whitelist` はインラインプラグインとして
同梱されているため、追加のプラグインインストールは不要です。

## License

[MIT License](./LICENSE)
