/** Provenance of the pinned snapshot. */
export interface Source {
  /** Identifier of the upstream project. */
  project: string;
  /** Human readable URL of the pinned file. */
  url: string;
  /** Raw URL of the pinned file. */
  snapshot: string;
  /** Commit the snapshot was taken from. */
  commit: string;
  /** ISO timestamp of the collection. */
  collected: string;
  /** SHA-256 of the snapshot. */
  digest: string;
}

/** Provenance of the pinned snapshot. */
export declare const source: Source;

export * as data from './data/index.mjs';
