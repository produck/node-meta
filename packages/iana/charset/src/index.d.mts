/** Provenance of the bundled registry snapshot. */
export interface Source {
  /** Registry URL the snapshot was generated from. */
  url: string;

  /** Exact ISO 8601 timestamp of the collection run. */
  updated: string;

  /** SHA-256 digest of the downloaded XML. */
  digest: string;
}

/** Provenance of the bundled registry snapshot. */
export declare const source: Source;

export * as data from './data/index.mjs';
