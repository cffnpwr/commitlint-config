import type { UserConfig } from "@commitlint/types";

import { gitmojiWhitelist } from "./plugins/gitmoji-whitelist.ts";
import { noAiCoauthor } from "./plugins/no-ai-coauthor.ts";

const ALLOWED_TYPES = [
  "feat",
  "fix",
  "chore",
  "docs",
  "refactor",
  "test",
  "build",
  "ci",
  "perf",
  "style",
  "revert",
] as const;

/**
 * @cffnpwr/commitlint-config
 *
 * Shared commitlint configuration for cffnpwr, including the custom
 * `no-ai-coauthor` and `gitmoji-whitelist` rules.
 *
 * @example
 * ```ts
 * import type { UserConfig } from "@commitlint/types";
 *
 * const config: UserConfig = {
 *   extends: ["@cffnpwr/commitlint-config"],
 * };
 *
 * export default config;
 * ```
 */
const config: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
    },
  },
  rules: {
    "type-enum": [2, "always", [...ALLOWED_TYPES]],
    "type-empty": [2, "never"],
    "type-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-max-length": [2, "always", 72],
    "body-empty": [2, "always"],
    "footer-empty": [2, "always"],
    "gitmoji-whitelist": [2, "always"],
    "no-ai-coauthor": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "no-ai-coauthor": noAiCoauthor,
        "gitmoji-whitelist": gitmojiWhitelist,
      },
    },
  ],
};

export default config;
