/**
 * Illustrative — CareerPilot public showcase (not production source).
 * Destination CV: market layout norms are independent from document language.
 */

export const DESTINATION_MARKETS = [
  "FR",
  "US",
  "CA",
  "LU",
  "CH",
  "DE",
  "GB",
  "BE",
  "IE",
] as const;

export const DOCUMENT_LANGUAGES = ["fr", "en", "de"] as const;

export type DestinationMarket = (typeof DESTINATION_MARKETS)[number];
export type DocumentLanguage = (typeof DOCUMENT_LANGUAGES)[number];

export type CvDestination = {
  /** Country/region layout & photo norms (e.g. US resume, no photo). */
  market: DestinationMarket;
  /** Language of the generated PDF text. */
  language: DocumentLanguage;
};

export type DestinationPack = {
  destination: CvDestination;
  /** Optional extra languages bundled in a ZIP. */
  extraLanguages: DocumentLanguage[];
  includePhoto: boolean;
  proofUrl?: string; // portfolio / proof link in header when allowed
};

/** US market + English document — typical “resume” pack. */
export const exampleUsEn: DestinationPack = {
  destination: { market: "US", language: "en" },
  extraLanguages: ["fr"],
  includePhoto: false,
  proofUrl: "https://porfolio-nilisofficiel.vercel.app/",
};
