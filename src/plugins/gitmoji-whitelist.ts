import type { Rule } from "@commitlint/types";

const ALLOWED_GITMOJI = [
  ":art:",
  ":recycle:",
  ":zap:",
  ":fire:",
  ":bug:",
  ":ambulance:",
  ":sparkles:",
  ":memo:",
  ":tada:",
  ":white_check_mark:",
  ":lock:",
  ":green_heart:",
  ":wrench:",
  ":package:",
  ":rewind:",
] as const;

/**
 * Allows a leading gitmoji shortcode in the subject only when it is on the whitelist.
 */
export const gitmojiWhitelist: Rule = ({ subject }) => {
  if (!subject) {
    return [true];
  }
  const match = subject.match(/^(:[a-z0-9_+-]+:)\s/);
  if (!match) {
    return [true];
  }
  const gitmoji = match[1];
  if (gitmoji === undefined) {
    return [true];
  }
  if ((ALLOWED_GITMOJI as readonly string[]).includes(gitmoji)) {
    return [true];
  }

  return [
    false,
    `gitmoji ${gitmoji} is not in the whitelist: ${ALLOWED_GITMOJI.join(", ")}`,
  ];
};
