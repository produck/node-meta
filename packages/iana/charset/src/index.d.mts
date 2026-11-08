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

  /** Registration date, only present on records added after 1995. */
  date: string | null;
}

/** Every record, sorted by ascending MIBenum. */
export declare const RECORD_LIST: Record[];
