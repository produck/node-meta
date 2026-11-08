/** A cross reference recorded by IANA for a charset. */
export interface Xref {
  /** Reference kind, for example `rfc`, `person`, `uri` or `registry`. */
  type: string;

  /** Reference target, for example `rfc2046` or a URI. */
  data: string;
}

/** One IANA character set registration. */
export interface Record {
  /** Official IANA registration name. */
  name: string;

  /** Unique MIBenum value of the registration. */
  mibEnum: number;

  /** Preferred alias when IANA declares one, otherwise `null`. */
  preferredAlias: string | null;

  /** Every alias, including the registration name and preferred alias. */
  aliasList: string[];

  /** Short description taken from the registry. */
  description: string;

  /** Cross references recorded by IANA. */
  xrefList: Xref[];

  /** Registration date, only present on records added after 1995. */
  date: string | null;
}

/** Provenance of the bundled registry snapshot. */
export interface Source {
  /** Registry URL the snapshot was generated from. */
  url: string;

  /** Upstream `Last Updated` value of the registry. */
  updated: string;

  /** SHA-256 digest of the downloaded XML. */
  digest: string;
}

/** Provenance of the bundled registry snapshot. */
export declare const SOURCE: Readonly<Source>;

/** Every record, sorted by ascending MIBenum. */
export declare const RECORD_LIST: Readonly<Record[]>;

/** Number of registrations. */
export declare const COUNT: number;

/** Number of distinct aliases, case-insensitively. */
export declare const ALIAS_COUNT: number;

/**
 * Answers whether the value names a registered charset alias.
 *
 * @param value - Candidate alias, any case.
 * @returns `true` when the value is registered.
 */
export declare function isAlias(value: unknown): boolean;

/**
 * Answers whether the value names a registered MIBenum.
 *
 * @param value - Candidate MIBenum.
 * @returns `true` when the value is registered.
 */
export declare function isMibEnum(value: unknown): boolean;

/**
 * Finds a registration by alias, case-insensitively.
 *
 * @param alias - Registered name or alias.
 * @returns A copy of the record, or `null` when unknown.
 */
export declare function findByAlias(alias: unknown): Record | null;

/**
 * Finds a registration by MIBenum.
 *
 * @param mibEnum - Registered MIBenum value.
 * @returns A copy of the record, or `null` when unknown.
 */
export declare function findByMibEnum(mibEnum: unknown): Record | null;

/**
 * Answers every registration.
 *
 * @returns Copies of all records, sorted by ascending MIBenum.
 */
export declare function findAll(): Record[];
