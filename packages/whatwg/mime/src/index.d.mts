/** Provenance of the bundled specification snapshot. */
export interface Source {
  /** Identifier of the specification the data was extracted from. */
  standard: string;

  /** Living standard URL. */
  url: string;

  /** Commit snapshot URL the document was downloaded from. */
  snapshot: string;

  /** Commit the snapshot was built from. */
  commit: string;

  /** Date the specification itself was last updated. */
  updated: string;

  /** Exact ISO 8601 timestamp of the collection run. */
  collected: string;

  /** SHA-256 digest of the downloaded document. */
  digest: string;
}

/** Provenance of the bundled specification snapshot. */
export declare const source: Source;

export * as data from './data/index.mjs';
