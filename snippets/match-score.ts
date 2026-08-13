/**
 * Illustrative — CareerPilot public showcase (not production source).
 * Shared-contract style for match scores explained to the user.
 */
import { z } from "zod";

export const MatchReasonSchema = z.object({
  code: z.string().min(1),
  label: z.string().min(1),
  polarity: z.enum(["positive", "neutral", "negative"]),
});

export const MatchScoreSchema = z.object({
  jobId: z.string().uuid(),
  score: z.number().min(0).max(100),
  reasons: z.array(MatchReasonSchema).min(1),
  // Portfolio-proven skills can reinforce the score in production matching.
  portfolioSkillHits: z.array(z.string()).default([]),
});

export type MatchScore = z.infer<typeof MatchScoreSchema>;

/** Example payload a recruiter would see explained in the UI. */
export const exampleMatch: MatchScore = {
  jobId: "00000000-0000-4000-8000-000000000001",
  score: 88,
  reasons: [
    { code: "skill_ts", label: "TypeScript aligné", polarity: "positive" },
    { code: "skill_nest", label: "NestJS aligné", polarity: "positive" },
    { code: "remote_partial", label: "Remote partiel", polarity: "neutral" },
  ],
  portfolioSkillHits: ["TypeScript", "NestJS"],
};
