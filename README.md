# @cffnpwr/commitlint-config

[![GitHub License](https://img.shields.io/github/license/cffnpwr/commitlint-config?style=flat)](./LICENSE)
[![npm Version](https://img.shields.io/npm/v/%40cffnpwr%2Fcommitlint-config?style=flat)](https://www.npmjs.com/package/@cffnpwr/commitlint-config)
[![JSR Version](https://jsr.io/badges/@cffnpwr/commitlint-config)](https://jsr.io/@cffnpwr/commitlint-config)

A shared commitlint configuration for cffnpwr.

[日本語のREADMEはこちら](./README-ja.md)

## What's Included

- Conventional Commits rules (`type-enum`, `subject-max-length`, etc.).
- `no-ai-coauthor`: rejects commits whose `Co-authored-by` trailer references an AI agent.
- `gitmoji-whitelist`: allows a leading gitmoji shortcode in the subject only when it is on the whitelist.
- `defaultIgnores: false`: lints every commit, including merge, revert and `fixup!` commits that commitlint skips by default.

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

## How to Use

Create a commitlint config file and extend this shared configuration.

```typescript
import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@cffnpwr/commitlint-config"],
};

export default config;
```

The custom `no-ai-coauthor` and `gitmoji-whitelist` rules are bundled as inline
plugins, so no extra plugin installation is required.

## License

[MIT License](./LICENSE)
