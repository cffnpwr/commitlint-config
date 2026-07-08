import type { Rule } from "@commitlint/types";

const AI_COAUTHOR_PATTERNS: readonly RegExp[] = [
  /claude/i,
  /anthropic/i,
  /openai/i,
  /chatgpt/i,
  /gpt-?\d/i,
  /copilot/i,
  /\bcursor\b/i,
  /\bdevin\b/i,
  /\bcodex\b/i,
  /gemini/i,
  /\bbard\b/i,
];

/**
 * Rejects commits whose `Co-authored-by` trailer references an AI agent.
 */
export const noAiCoauthor: Rule = ({ raw }) => {
  if (!raw) {
    return [true];
  }
  for (const line of raw.split(/\r?\n/)) {
    const match = line.trim().match(/^co-authored-by:\s*(.+)$/i);
    if (!match) {
      continue;
    }
    const value = match[1];
    if (value === undefined) {
      continue;
    }
    if (AI_COAUTHOR_PATTERNS.some((pattern) => pattern.test(value))) {
      return [
        false,
        `Co-authored-by trailer must not reference AI agents: "${line.trim()}"`,
      ];
    }
  }

  return [true];
};
