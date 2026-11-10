/** Provenance of the bundled mime.types snapshot. */
export interface Source {
  /** Project the snapshot was taken from. */
  project: string;

  /** GitHub blob URL of the pinned file. */
  url: string;

  /** Raw file URL the document was downloaded from. */
  snapshot: string;

  /** Commit the snapshot was taken from. */
  commit: string;

  /** Exact ISO 8601 timestamp of the collection run. */
  collected: string;

  /** SHA-256 digest of the downloaded document. */
  digest: string;
}

/** Provenance of the bundled mime.types snapshot. */
export declare const source: Source;

export * as data from './data/index.mjs';
