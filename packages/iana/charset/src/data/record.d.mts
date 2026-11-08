/** A cross reference recorded by IANA for a charset. */
export interface Xref {
  /** Reference kind, for example `rfc`, `person`, `uri` or `registry`. */
  type: string;

  /** Reference target, for example `rfc2046` or a URI. */
  data: string;
}

/** Official IANA registration name. */
export declare const name: string;

/** Unique MIBenum value of the registration. */
export declare const mibEnum: number;

/** Preferred alias when IANA declares one, otherwise `null`. */
export declare const preferredAlias: string | null;

/** Every alias, including the registration name and preferred alias. */
export declare const aliasList: string[];

/** Registration date, only present on records added after 1995. */
export declare const date: string | null;

/** Short description taken from the registry. */
export declare const description: string;

/** Cross references recorded by IANA. */
export declare const xrefList: Xref[];
